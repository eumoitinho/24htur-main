import { ReactNode } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StepByStepProps {
  children: ReactNode;
}

export function StepByStep({ children }: StepByStepProps) {
  return (
    <div className="my-6 space-y-0 border border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-gradient-to-r from-[#DDB86A]/10 to-[#c9a558]/10 px-4 py-3 border-b border-border">
        <h4 className="font-semibold text-sm flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#DDB86A]" />
          Passo a Passo
        </h4>
      </div>
      <div className="p-4">
        <ol className="space-y-3 list-none">
          {children}
        </ol>
      </div>
    </div>
  );
}
