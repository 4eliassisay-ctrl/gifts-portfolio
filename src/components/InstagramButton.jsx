import { INSTAGRAM_DM } from '../data/siteContent'

const VARIANTS = {
  primary:
    'bg-linear-to-r from-el-blue to-el-purple text-el-void hover:brightness-110 glow-ring hover:shadow-[0_0_40px_-4px_rgba(56,189,248,0.5)]',
  secondary:
    'bg-el-card text-white border border-white/10 hover:border-el-blue/40 hover:bg-white/5',
  ghost:
    'text-el-blue hover:text-white border border-el-blue/40 bg-el-blue/5 hover:bg-el-blue/15 hover:border-el-blue/60',
  cta:
    'bg-linear-to-r from-el-purple via-el-magenta to-el-blue text-white text-lg px-8 py-4 glow-ring hover:scale-[1.02] active:scale-[0.98]',
}

/**
 * Opens Instagram DM to @eltechnologies in a new tab.
 */
export function InstagramButton({
  children,
  className = '',
  variant = 'primary',
  ...anchorProps
}) {
  return (
    <a
      href={INSTAGRAM_DM}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`}
      {...anchorProps}
    >
      {children}
    </a>
  )
}
