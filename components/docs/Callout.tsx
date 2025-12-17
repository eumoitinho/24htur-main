import { ReactNode } from 'react';
import { AlertCircle, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: ReactNode;
}

const icons = {
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle2,
};

const styles = {
  info: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
  warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-700 dark:text-yellow-300',
  error: 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300',
  success: 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-300',
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type];

  return (
    <div className={`my-6 border rounded-lg p-4 ${styles[type]}`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-semibold mb-1">{title}</h4>
          )}
          <div className="text-sm opacity-90">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
