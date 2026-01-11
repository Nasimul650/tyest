import Image from "next/image";

interface ProjectCardProps {
  previewImage: string;
  title: string;
  description: string;
  client: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ previewImage, title, description, client }) => {
  return (
    <div className="relative group flex-shrink-0 w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl">
      {/* Image */}
      <Image 
        fill
        src={previewImage} 
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay - Shows on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 gap-1 ">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-3 text-ellipsis overflow-hidden">{description}</p>
        <p className="text-gray-400 text-xs">{client}</p>
      </div>
    </div>
  );
};

export default ProjectCard