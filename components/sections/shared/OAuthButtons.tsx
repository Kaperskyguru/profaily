"use client";
import { Glyph } from "@/components/ui/Glyph";
import { links, oauthUrl, OAUTH_PROVIDERS } from "@/lib/links";

/**
 * "Sign up or continue with": email sign-up plus one button per sign-in provider the app offers.
 * Full-page navigations to the API, like the app's own buttons; the browser's timezone rides along
 * because a provider sign-up has no form to send it in.
 */
export function OAuthButtons({ lead }: { lead?: string } = {}) {
  const withZone = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) e.currentTarget.href = `${e.currentTarget.href.split("?")[0]}?tz=${encodeURIComponent(tz)}`;
    } catch {
      /* the plain link still works */
    }
  };
  return (
    <div className="signup">
      <p>{lead ?? <><a href={links.register}>Sign up</a> or continue with</>}</p>
      <div className="oauth">
        {OAUTH_PROVIDERS.map((p) => (
          <a key={p.id} className="btn btn-ghost" href={oauthUrl(p.id)} onClick={withZone}>
            <Glyph name={p.id} id={`oauth-${p.id}`} />
            {p.label}
          </a>
        ))}
      </div>
    </div>
  );
}
