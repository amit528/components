import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
     "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    // "https://picsum.photos/200/300?image=1050",
    // "https://picsum.photos/300/300?image=206",
    // "https://picsum.photos/200/300?image=1050",
    // "https://picsum.photos/300/300?image=206",
    
]

class MyWrapper extends React.Component {
    render() {
        return (
            <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{750: 1, 900: 2, 950: 3}}
            >
                <div style={{height:'500px'}}>
                <Masonry gutter={'5px'}>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                        />
                    ))}
                </Masonry>
                </div>
            </ResponsiveMasonry>
           
            </div>
        )
    }
}


export default MyWrapper;