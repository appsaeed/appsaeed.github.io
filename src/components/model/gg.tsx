import { createSignal } from "solid-js";

type GalleryModalProps = {
    isOpen?: boolean,
    closeModal?: () => void;
    selectedImageIndex: number;
    images: Array<{ url: string, alt?: string }>;
}

function GalleryModal({ images, selectedImageIndex, closeModal }: GalleryModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = createSignal(selectedImageIndex);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (

        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div class={`modal inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${currentImageIndex() >= 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div class="modal-content">
                        <div class="modal-header px-4 py-2">
                            <button onClick={closeModal} class="text-gray-500 hover:text-gray-700 float-right">
                                Close
                            </button>
                        </div>
                        <div class="modal-body p-4">
                            <img src={images[currentImageIndex()].url} />
                        </div>
                        <div class="modal-footer px-4 py-2 flex justify-between">
                            <button onClick={prevImage} class="text-gray-500 hover:text-gray-700">Previous</button>
                            <button onClick={nextImage} class="text-gray-500 hover:text-gray-700">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryModal;
