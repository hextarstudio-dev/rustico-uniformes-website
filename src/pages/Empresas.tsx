import PortfolioPageTemplate from "@/components/PortfolioPageTemplate";

// Import images
import empresas01 from "@/assets/empresas/empresas-01.png";
import empresas02 from "@/assets/empresas/empresas-02.png";
import empresas03 from "@/assets/empresas/empresas-03.png";
import empresas04 from "@/assets/empresas/empresas-04.png";
import empresas05 from "@/assets/empresas/empresas-05.png";
import empresas06 from "@/assets/empresas/empresas-06.png";
import empresas07 from "@/assets/empresas/empresas-07.png";
import empresas08 from "@/assets/empresas/empresas-08.png";
import empresas09 from "@/assets/empresas/empresas-09.png";
import empresas10 from "@/assets/empresas/empresas-10.png";
import empresas11 from "@/assets/empresas/empresas-11.png";
import empresas12 from "@/assets/empresas/empresas-12.png";
import empresas13 from "@/assets/empresas/empresas-13.png";
import empresas14 from "@/assets/empresas/empresas-14.png";
import empresas15 from "@/assets/empresas/empresas-15.png";
import empresas16 from "@/assets/empresas/empresas-16.png";
import empresas17 from "@/assets/empresas/empresas-17.png";
import empresas18 from "@/assets/empresas/empresas-18.png";
import empresas19 from "@/assets/empresas/empresas-19.png";
import empresas20 from "@/assets/empresas/empresas-20.png";
import empresas21 from "@/assets/empresas/empresas-21.png";
import empresas22 from "@/assets/empresas/empresas-22.png";
import empresas23 from "@/assets/empresas/empresas-23.png";
import empresas24 from "@/assets/empresas/empresas-24.png";
import empresas25 from "@/assets/empresas/empresas-25.png";
import empresas26 from "@/assets/empresas/empresas-26.png";
import empresas27 from "@/assets/empresas/empresas-27.png";
import empresas28 from "@/assets/empresas/empresas-28.png";
import empresas29 from "@/assets/empresas/empresas-29.png";
import empresas30 from "@/assets/empresas/empresas-30.png";
import empresas31 from "@/assets/empresas/empresas-31.png";
import empresaDeUniformes from "@/assets/empresas/empresa-de-uniformes.png";
import rrn10 from "@/assets/empresas/rrn10.png";
import instagramPost45Jpg from "@/assets/empresas/instagram-post-45.jpg";
import instagramPost45Png from "@/assets/empresas/instagram-post-45.png";
import uniformeEmpresarial from "@/assets/empresas/uniforme-empresarial.jpg";
import uniformeRrn10 from "@/assets/empresas/uniforme-rrn10.png";
import uniformeSocialFeminino from "@/assets/empresas/uniforme-social-feminino.png";
import uniformesBordados from "@/assets/empresas/uniformes-bordados.png";
import uniformesPersonalizadosParaEmpresas from "@/assets/empresas/uniformes-personalizados-para-empresas.png";
import uniformesPortoAlegre from "@/assets/empresas/uniformes-porto-alegre.png";
import uniformesProfissionaisSaoPaulo from "@/assets/empresas/uniformes-profissionais-sao-paulo.png";
import uniformesRrn10 from "@/assets/empresas/uniformes-rrn10.png";

const portfolioImages = [
  { image: empresas01 },
  { image: empresas02 },
  { image: empresas03 },
  { image: empresas04 },
  { image: empresas05 },
  { image: empresas06 },
  { image: empresas07 },
  { image: empresas08 },
  { image: empresas09 },
  { image: empresas10 },
  { image: empresas11 },
  { image: empresas12 },
  { image: empresas13 },
  { image: empresas14 },
  { image: empresas15 },
  { image: empresas16 },
  { image: empresas17 },
  { image: empresas18 },
  { image: empresas19 },
  { image: empresas20 },
  { image: empresas21 },
  { image: empresas22 },
  { image: empresas23 },
  { image: empresas24 },
  { image: empresas25 },
  { image: empresas26 },
  { image: empresas27 },
  { image: empresas28 },
  { image: empresas29 },
  { image: empresas30 },
  { image: empresas31 },
  { image: empresaDeUniformes },
  { image: rrn10 },
  { image: instagramPost45Jpg },
  { image: instagramPost45Png },
  { image: uniformeEmpresarial },
  { image: uniformeRrn10 },
  { image: uniformeSocialFeminino },
  { image: uniformesBordados },
  { image: uniformesPersonalizadosParaEmpresas },
  { image: uniformesPortoAlegre },
  { image: uniformesProfissionaisSaoPaulo },
  { image: uniformesRrn10 },
];

const EmpresasPage = () => {
  return (
    <PortfolioPageTemplate
      segmentName="Empresas"
      segmentTitle="EMPRESAS"
      segmentSubtitle="Portfólio Empresas"
      introText="Projetos desenvolvidos para empresas de diversos setores, valorizando a identidade corporativa e o conforto dos colaboradores."
      seoDescription="Uniformes personalizados para empresas. Camisas de malha, sociais, polo, calça de brim, calça social, jalecos, aventais, casacos e suéter. Qualidade premium, atendimento humanizado e entrega nacional."
      portfolioImages={portfolioImages}
      heroImage={empresas01}
      trustSectionTitle="Empresas que atendemos"
      trustPartners={[
        { name: "Sacolão do Retiro" },
        { name: "Condomínio Residencial Padre Corrêa" },
        { name: "Dib" },
        { name: "Nardo Autopeças" },
        { name: "Cidade das Hortênsias" },
        { name: "Italinea" },
        { name: "Felipe Tintas" },
        { name: "Cartão Convênio" },
        { name: "Ik Imports" },
        { name: "FarmaDebora" },
        { name: "Da Cruz Lutieria" },
        { name: "Manipulação Viver Bem" },
      ]}
    />
  );
};

export default EmpresasPage;
