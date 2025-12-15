interface WordmarkProps {
  event?: string;
  className?: string;
}

export default function Wordmark({ event = 'UOK', className = '' }: WordmarkProps) {
  return (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#EB0028] leading-none">TEDx</span>
      <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none">{event}</span>
    </div>
  );
}
