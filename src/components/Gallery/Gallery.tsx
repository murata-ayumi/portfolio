import '../styles/gallery.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants/fadeIn.tsx';
import GalleryItem from './GalleryItem';
import todoImage from '../../assets/todo.png';
import QrImage from '../../assets/qr.png';
import ClampImage from '../../assets/clamp.png';
import DecoImage from '../../assets/decoration.png';

interface GalleryItemData {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  domainLink: string;
  githubRepo: string;
  domainName: string;
}

const galleryItems: GalleryItemData[] = [
  {
    image: todoImage,
    title: 'To Do List',
    description: 'シンプルなToDoリスト',
    githubLink: 'https://github.com/murata-ayumi/todolist-javascript',
    domainLink: 'https://todolist-javascript-peach.vercel.app',
    githubRepo: 'murata-ayumi/todolist-javascript',
    domainName: 'todolist-javascript-peach.vercel.app',
  },
  {
    image: QrImage,
    title: 'QR Code ジェネレーター',
    description: 'アニメーション付きのQR Codeジェネレーター',
    githubLink: 'https://github.com/murata-ayumi/QRcode',
    domainLink: 'https://qrcode-two-sandy.vercel.app',
    githubRepo: 'murata-ayumi/QRcode',
    domainName: 'qrcode-two-sandy.vercel.app',
  },
  {
    image: ClampImage,
    title: 'Clamp Generator',
    description: 'cssのclampジェネレーター',
    githubLink: 'https://github.com/murata-ayumi/css-clamp-generator',
    domainLink: 'https://css-clamp-generator.vercel.app/',
    githubRepo: 'murata-ayumi/css-clamp-generator',
    domainName: 'css-clamp-generator.vercel.app',
  },
  {
    image: DecoImage,
    title: 'Decoration Css Generator',
    description: '2種類のcssジェネレーター',
    githubLink: 'https://github.com/murata-ayumi/Decoration-CSS-Generator',
    domainLink: 'https://decoration-css-generator.vercel.app',
    githubRepo: 'murata-ayumi/Decoration-CSS-Generator',
    domainName: 'decoration-css-generator.vercel.app',
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery">
      <motion.h2
        variants={fadeIn('left', 1, 'spring', 0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0 }}
        className="gallery-text"
      >
        Gallery
      </motion.h2>
      <motion.div
        variants={fadeIn('left', 1, 'spring', 0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0 }}
        className="gallery-container"
      >
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            githubLink={item.githubLink}
            domainLink={item.domainLink}
            githubRepo={item.githubRepo}
            domainName={item.domainName}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
