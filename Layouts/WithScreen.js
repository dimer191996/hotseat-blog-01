export default function WithScreen({ children, width = "w-1/2" }) {
  return (
    <>
      <div className=" flex justify-center ">
        <div className={`${width} `}>
          {" "}
          {children}
          <ins
            class="adsbygoogle"
            style={{
              display: "block",
              textAlign: "center",
              backgroundColor: "#eeee40",
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-4491397756399283"
            data-ad-slot="2168142036"
          ></ins>
        </div>
      </div>
    </>
  );
}
