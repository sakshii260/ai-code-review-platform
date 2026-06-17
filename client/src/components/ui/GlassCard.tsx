interface GlassCardProps {
  children: React.ReactNode;
}

function GlassCard({
  children
}: GlassCardProps) {

  return (

    <div
      className="
      glass
      p-6
      "
    >

      {children}

    </div>

  );

}

export default GlassCard;