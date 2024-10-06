import SocialMediaCard from "../components/aisehi";
function Searchall (){
    return (<><div className="bg-neutral-900 h-screen"> <div className="flex justify-center gap-6 mt-30">
        <SocialMediaCard
          platform="Instagram"
          image1="https://example.com/image1.jpg"
          image2="https://example.com/image2.jpg"
          icon="fab fa-instagram"
        />
        <SocialMediaCard
          platform="Twitter - X"
          image1="https://example.com/image3.jpg"
          image2="https://example.com/image4.jpg"
          icon="fab fa-twitter"
        />
        <SocialMediaCard
          platform="LinkedIn"
          image1="https://example.com/image5.jpg"
          image2="https://example.com/image6.jpg"
          icon="fab fa-linkedin"
        />
      </div></div></>)
}
export default Searchall;