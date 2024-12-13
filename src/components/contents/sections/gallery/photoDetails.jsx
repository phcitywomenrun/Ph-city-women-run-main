import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";

function PhotosDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fullscreenPhoto, setFullscreenPhoto] = useState(null); // New state for fullscreen image

  const hygraphEndpoint =
    "https://ap-south-1.cdn.hygraph.com/content/cm25wyi9i064707wegesycex9/master";
  const query = `
    query GetGalleryBySlug($slug: String!) {
      galleries(where: { slug: $slug }) {
        id
        photos {
          url
        }
      }
    }
  `;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query,
          variables: { slug },
        });
        const galleryData = response.data.data.galleries[0];
        setPost(galleryData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err.response?.data || err);
        setError(err);
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post</p>;
  if (!post) return <p>No images found for this gallery.</p>;

  // Function to handle image click for fullscreen
  const openFullscreen = (photoUrl) => {
    setFullscreenPhoto(photoUrl);
  };

  // Function to close fullscreen
  const closeFullscreen = () => {
    setFullscreenPhoto(null);
  };

  return (
    <>
      <section className="relative pt-[90px] bg-white flex justify-center items-center w-full h-auto">
        <div className="static gap-[40px] flex flex-col justify-center items-center w-full auto-container px-[15px] py-[190px] my-0 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-4 gap-x-3">
            {post.photos.map((photo, index) => (
              <div
                key={index}
                className="relative flex justify-start items-start h-auto w-full overflow-hidden cursor-pointer"
                onClick={() => openFullscreen(photo.url)} // Open image in fullscreen on click
              >
                <LoadBlurHashImage
                  src={photo.url}
                  blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash if available
                  className="w-full h-[303px] rounded-[24px] object-cover"
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenPhoto && (
        <div className="fixed z-[9999] inset-0 flex items-center justify-center bg-black bg-opacity-80  ">
          <a
            href={fullscreenPhoto}
            download
            className="mt-4 absolute top-[3px] right-9 text-[#8D12AB] py-2 px-4 rounded hover:text-white"
          >
            <FaDownload />
          </a>
          <button
            className="absolute top-4 right-4 text-[#8D12AB] text-3xl font-bold"
            onClick={closeFullscreen}
          >
            &times; {/* Close button */}
          </button>
          <div className="flex flex-col items-center py-[30px] max-h-screen">
            <img
              src={fullscreenPhoto}
              alt="Fullscreen Photo"
              className="max-w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PhotosDetails;
