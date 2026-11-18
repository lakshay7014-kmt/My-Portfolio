export default function MobileFlow() {
  return (
    <div className="mobile-flow" aria-label="Lakshay's workflow">
      {[
        ['Trigger','Visitor arrives'], ['Agent','Lakshay Kumawat'], ['Tools','Python · n8n · Supabase · AI'], ['Output','Projects + Contact'],
      ].map(([label, detail], index) => (
        <div className="mobile-flow-step" key={label}>
          <span className={index === 1 ? 'success' : ''}/>
          <div><small>{label}</small><b>{detail}</b></div>
        </div>
      ))}
    </div>
  );
}
