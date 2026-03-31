export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="bg-organic absolute inset-0" />
      <div
        className="absolute -top-20 -right-16 w-[400px] h-[400px] bg-blob-coral animate-blob-drift"
        style={{ borderRadius: '60% 40% 55% 45%', transform: 'rotate(-12deg)' }}
      />
      <div
        className="absolute top-[300px] -left-24 w-[350px] h-[280px] bg-blob-gold animate-blob-drift"
        style={{
          borderRadius: '45% 55% 60% 40%',
          transform: 'rotate(8deg)',
          animationDelay: '-7s',
        }}
      />
      <div
        className="absolute -bottom-16 right-24 w-[250px] h-[250px] bg-blob-coral/50 animate-blob-drift"
        style={{
          borderRadius: '50% 50% 40% 60%',
          transform: 'rotate(-5deg)',
          animationDelay: '-13s',
        }}
      />
    </div>
  );
}
