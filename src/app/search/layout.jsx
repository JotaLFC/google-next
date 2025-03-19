import SearchHeader from '@/components/SearchHeader';
import './../globals.css';
import { Suspense } from 'react';

export default function layout({ children }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchHeader />
      </Suspense>
      {children}
    </div>
  );
}