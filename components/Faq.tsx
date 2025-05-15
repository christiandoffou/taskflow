import Pretitle from "./Pretitle";
import { delay, motion } from "framer-motion";
import { fadeIn } from "@/variants";
import FaqItem from "./FaqItem";

const faqItemData = [
  {
    title: "Combien de temps dure généralement un projet de construction ?",
    description:
      "La durée d'un projet de construction dépend de plusieurs facteurs, notamment la taille et la complexité du projet, les conditions météorologiques et la disponibilité des matériaux. En général, un projet peut prendre de quelques mois à plusieurs années.",
  },
  {
    title:
      "Quels sont les principaux défis auxquels vous êtes confrontés dans un projet de construction ?",
    description:
      "Les principaux défis incluent la gestion des délais, le respect du budget, la coordination des différents corps de métier et la gestion des imprévus.",
  },
  {
    title: "Comment gérez-vous les imprévus sur un chantier ?",
    description:
      "Nous avons une équipe dédiée à la gestion des imprévus qui évalue rapidement la situation et propose des solutions pour minimiser les retards et les coûts supplémentaires.",
  },
  {
    title: "Quels types de matériaux utilisez-vous pour vos projets ?",
    description:
      "Nous utilisons une variété de matériaux en fonction des besoins du projet, y compris le béton, l'acier, le bois et d'autres matériaux durables.",
  },
  {
    title: "Comment assurez-vous la sécurité sur le chantier ?",
    description:
      "Nous avons des protocoles de sécurité stricts en place, y compris des formations régulières pour notre personnel et des inspections de sécurité fréquentes.",
  },
  {
    title:
      "Proposez-vous des services de conception en plus de la construction ?",
    description:
      "Oui, nous proposons des services de conception intégrés pour aider nos clients à visualiser leur projet avant le début de la construction.",
  },
  {
    title: "Comment puis-je obtenir un devis pour mon projet ?",
    description:
      "Vous pouvez nous contacter directement via notre site web ou par téléphone pour discuter de votre projet et obtenir un devis personnalisé.",
  },
  {
    title: "Quels sont vos horaires de travail ?",
    description:
      "Nos horaires de travail sont généralement de 8h à 17h du lundi au vendredi, mais nous pouvons nous adapter en fonction des besoins du projet.",
  },
];

// animation variants for the FAQ section
const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, //staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* pretitle */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="FAQ" center />
          <h2 className="h2 mb-3">Questions Fréquemment Posées</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Vous avez des questions ? Nous avons les réponses. Découvrez notre
            section FAQ pour en savoir plus sur nos services et notre expertise.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="h-full flex flex-col">
          {faqItemData.map((item, index) => {
            return (
              <motion.li
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index} // pass the index to the animation
                key={index}
                className="mb-12"
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
