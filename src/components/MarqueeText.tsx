type Props = {
  text: string;
};
const MarqueeText = (props: Props) => {
  return (
    <section
      className={`bg-[#47715B] text-white py-2 text-center relative overflow-hidden whitespace-nowrap`}
    >
      <div className="animate-marquee inline-block">
        <span className={`md:text-xl sm:text-lg font-bold`}>{props.text}</span>
      </div>
    </section>
  );
};
export default MarqueeText;
