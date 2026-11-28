/**
 * Komponen helper: mengubah iconName (string) dari data services
 * menjadi komponen lucide-react yang sesuai.
 * Jika icon tidak dikenali, fallback ke "Zap".
 */
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Database,
  Layers,
  TrendingUp,
  Zap,
} from "lucide-react";

const iconMap = {
  Globe,
  LayoutDashboard,
  Smartphone,
  Database,
  Layers,
  TrendingUp,
  Zap,
};

/**
 * @param {{ name: string, size?: number, strokeWidth?: number, className?: string }} props
 */
export default function ServiceIcon({ name, size = 24, strokeWidth = 1.8, className = "" }) {
  const Icon = iconMap[name] ?? Zap;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
