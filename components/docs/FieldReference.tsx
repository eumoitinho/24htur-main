import { ReactNode } from 'react';

interface FieldReferenceProps {
  children: ReactNode;
}

export function FieldReference({ children }: FieldReferenceProps) {
  return (
    <div className="my-6 overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden border border-border rounded-lg">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/50">
              {children}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
