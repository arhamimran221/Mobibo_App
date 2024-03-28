import React from 'react';
import Image from 'next/image';
import GoogleMapReact from 'google-map-react';
import imageR1 from "@/Assests/ImageR1.svg";
import imageR2 from "@/Assests/ImageR2.svg";
import imageR3 from "@/Assests/ImageR3.svg";
import imageR4 from "@/Assests/ImageR4.svg";

const AllCompainRoutes = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const hongKongCenter = {
        lat: 22.3193, // Latitude of Hong Kong
        lng: 114.1694 // Longitude of Hong Kong
    };

    const defaultProps = {
        center: hongKongCenter,
        zoom: 11
    };

    return (
        <div className="allCompain-container">
            <div className='routes-wrap'>
                <div className='routes-left'>
                    <div className='flex gap-[10px]'>
                        <Image src={imageR1} style={{ width: '320px' }} />
                        <Image src={imageR2} style={{ width: '320px' }} />
                    </div>
                    <div className=' flex gap-[10px] mt-[10px]'>
                        <Image src={imageR3} style={{ width: '320px' }} />
                        <Image src={imageR4} style={{ width: '320px' }} />
                    </div>
                </div>
                <div className='routes-right'>
                    <h3 className='text-[28px]'>All campaign routes are fully customizable</h3>
                    <div style={{ height: '600px', marginTop: '10px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={hongKongCenter.lat}
                                lng={hongKongCenter.lng}
                                text="Hong Kong"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCompainRoutes;
