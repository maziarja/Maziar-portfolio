import { SOCIAL_MEDIA } from "../const";

function Footer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-center gap-10 border-t border-white/10 pt-8 max-sm:flex-col">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {SOCIAL_MEDIA.map((media, i) => (
            <a
              key={i}
              href={media.href}
              className="text-white/70 transition-colors duration-300 hover:text-gray-300"
            >
              <media.icon size={24} />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
