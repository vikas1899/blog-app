import appwriteService from "../appwrite/configg";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div className="bg-white shadow-sm shadow-slate-500 hover:scale-[1.02] rounded-lg border p-4">
          <div className="px-1 py-4">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-48 rounded-md object-cover"
            />

            <div className="font-bold text-xl mb-2">{title}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
