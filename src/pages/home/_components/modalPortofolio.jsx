import { BiLinkExternal } from "react-icons/bi";

const ModalPortofolio = ({ isOpen, onClose, data }) => {
  return (
    <dialog open={isOpen} id="portofolioModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <div className="text-start space-y-4">
          <h1 className="text-4xl font-semibold text-slate-700">
            {data?.title}
          </h1>
          <p className="text-slate-500 font-light text-justify">{data?.deskripsi}</p>

          {/* Tombol link jika ada */}
          {data?.link && (
            <a
              href={data?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn btn-outline border-none shadow-sm flex gap-2 items-center justify-center truncate hover:bg-slate-50 hover:scale-105 duration-500"
            >
              <p>Visit Website</p>
              <BiLinkExternal size={18} />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default ModalPortofolio;
