#!/usr/bin/env bash
# Re-encodes the product recordings for the web: a desktop file (1280px wide, hero 1600px) and a phone file (760px),
# both H.264 at 24 fps with no audio, plus matching WebP posters. Screen recordings are mostly still, so a higher CRF
# than camera footage costs nothing visible: UI text stays sharp at roughly 40% of the original size.
#
#   scripts/encode-media.sh <source-dir> <out-dir>
# Source files are named feat-<clip>.mp4 / .jpg and hero-publish.mp4 / hero-publish-poster.jpg.
set -euo pipefail
SRC="$1"; OUT="$2"; mkdir -p "$OUT"
enc() { # in out width crf
  ffmpeg -loglevel error -y -i "$1" -an -vf "scale='min($3,iw)':-2:flags=lanczos,fps=24" -c:v libx264 -crf "$4" -preset veryslow -tune animation -pix_fmt yuv420p -movflags +faststart "$2"
}
poster() { # in out width
  cwebp -quiet -q 80 -m 6 -resize "$3" 0 "$1" -o "$2"
}
export -f enc poster
for f in "$SRC"/feat-*.mp4; do
  n=$(basename "$f" .mp4)
  echo "enc $f $OUT/$n.mp4 1280 26"; echo "enc $f $OUT/$n.m.mp4 760 27"
done | xargs -P4 -I{} bash -c '{}'
enc "$SRC/hero-publish.mp4" "$OUT/hero-publish.mp4" 1600 26 &
enc "$SRC/hero-publish.mp4" "$OUT/hero-publish.m.mp4" 760 27 &
wait
for j in "$SRC"/feat-*.jpg; do n=$(basename "$j" .jpg); poster "$j" "$OUT/$n.webp" 1280; poster "$j" "$OUT/$n.m.webp" 760; done
for n in hero-publish-poster hero-publish-done; do poster "$SRC/$n.jpg" "$OUT/$n.webp" 1600; poster "$SRC/$n.jpg" "$OUT/$n.m.webp" 760; done
