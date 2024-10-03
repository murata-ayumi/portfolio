import { FaGithub } from 'react-icons/fa';
import { GrDomain } from 'react-icons/gr';

interface GalleryItemProps {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  domainLink: string;
  githubRepo: string;
  domainName: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  image,
  title,
  description,
  githubLink,
  domainLink,
  githubRepo,
  domainName,
}) => {
  return (
    <div className="gallery-item">
      <img src={image} alt={`${title}-image`} className="gallery-item-image" />
      <h3 className="gallery-item-text">{title}</h3>
      <div className="items-text">
        <p>{description}</p>
        <div>
          <a href={githubLink}>
            <FaGithub className="git-icon" />
            <p>{githubRepo}</p>
          </a>
        </div>
        <div>
          <a href={domainLink}>
            <GrDomain className="domain-icon" />
            <p>{domainName}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
