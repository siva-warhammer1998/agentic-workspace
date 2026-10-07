import type { LucideIcon } from 'lucide-react';

const sizes = { small: 16, section: 20, record: 24, feature: 32 } as const;

type IconProps = {
  icon: LucideIcon;
  size?: keyof typeof sizes;
  className?: string;
};

const Icon = ({ icon: Glyph, size = 'section', className = '' }: IconProps) => (
  <Glyph
    className={`portfolio-icon portfolio-icon--${size} ${className}`.trim()}
    size={sizes[size]}
    strokeWidth={1.75}
    nonScalingStroke
    aria-hidden="true"
    focusable="false"
  />
);

export default Icon;
