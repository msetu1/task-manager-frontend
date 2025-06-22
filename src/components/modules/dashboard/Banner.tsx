import Image from "next/image";

const Banner = () => {
    return (
        <div>
            
             <div className="w-full relative mb-6">
                    {/* Background Banner */}
                    <Image
                      src="/images/banner-img.png"
                      alt="Error Banner"
                      width={1920}
                      height={174}
                      className="w-full"
                    />
            
                    {/* Overlay Image on Right Side */}
                    <div className="absolute top-0 right-0">
                      <Image
                        src="/images/banner-img2.png"
                        alt="Overlay Banner"
                        width={448}
                        height={335}
                        className="w-full max-w-[300px] " // You can adjust width as needed
                      />
                    </div>
                  </div>
        </div>
    );
};

export default Banner;