import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // Update the document title
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description || "";
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.name = "description";
      newMetaDescription.content = description || "";
      document.head.appendChild(newMetaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.content = keywords || "";
    } else {
      const newMetaKeywords = document.createElement("meta");
      newMetaKeywords.name = "keywords";
      newMetaKeywords.content = keywords || "";
      document.head.appendChild(newMetaKeywords);
    }
  }, [location, title, description, keywords]);

  return null;
};

export default PageTitle;


{/* <PageTitle
  title="My Page Title"
  description="This is a description of the page."
  keywords="keyword1, keyword2, keyword3"
/>; */}