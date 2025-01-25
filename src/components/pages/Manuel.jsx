import React from "react";
import styled from "styled-components";
import h1 from "../images/manuel photo/h1.png";
import h2 from "../images/manuel photo/h2.png";
import s from "../images/manuel photo/s.png"
import l from "../images/manuel photo/l.png"
import p from "../images/manuel photo/p.png"
import a from "../images/manuel photo/a.png"
import f from "../images/manuel photo/f.png"
import d from "../images/manuel photo/d.png"
import mu from "../images/manuel photo/mu.png"
import ad from "../images/manuel photo/ad.png"
import dr1 from "../images/manuel photo/dr1.png"
import dr2 from "../images/manuel photo/dr2.png"
import cm from "../images/manuel photo/cm.png"



const ManuelContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 210mm; 
  min-height: 297mm; 
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #b55d51;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
  margin: 20px auto;
  border-radius: 10px;
`;

const Manuel = () => {
  return (
    <ManuelContainer>
      <Title>Manuel d'Utilisation de SavoryBytes</Title>
      <Paragraph>
        Bienvenue sur SavoryBytes ! Ce manuel vous guidera à travers les
        fonctionnalités de notre application.
      </Paragraph>

      <SectionTitle>1. Accueil</SectionTitle>
      <Paragraph>
      Dans la page d'accueil, vous trouverez un menu d'en-tête qui permet de sélectionner les modes et les catégories souhaités, ainsi qu'un bouton pour s'inscrire ou se connecter. Quant au corps de la page, vous y verrez les catégories populaires et les dernières recettes.
      </Paragraph>
      <Image src={h1} alt="Example Image" />
      <Image src={h2} alt="Example Image" />

      <SectionTitle>2. Sign up and Login:</SectionTitle>
      <Paragraph>
      En tant que nouveau visiteur, vous devez d'abord créer un nouveau compte pour accéder aux recettes.
      </Paragraph>
      <Image src={s} alt="Example Image" />
      <Image src={l} alt="Example Image" />

      <SectionTitle>3. Profil Utilisateur</SectionTitle>
      <Paragraph>
        Votre profil vous permet de gérer information personnel
      </Paragraph>
      <Image src={p} alt="Example Image" />

      <SectionTitle>4. About</SectionTitle>
      <Paragraph>
      Vous trouverez une introduction sur le chef et une courte histoire de sa carrière.
      </Paragraph>
      <Image src={a} alt="Example Image" />
      <SectionTitle>5. Favoris</SectionTitle>
      <Paragraph>
      Sur la page des favoris, vous trouverez une liste des recettes que vous avez enregistrées en tant que favoris, ainsi qu'une option pour les gérer ou les supprimer. Vous pourrez facilement accéder aux recettes que vous aimez le plus.
      </Paragraph>
      <Image src={f} alt="Example Image" />
      <SectionTitle>6. Dashboard</SectionTitle>
      <Paragraph>
      Sur le tableau de bord de l'administrateur, vous trouverez des statistiques dynamiques, telles que la note moyenne pour chaque mode et section de recette. Une table affiche également les utilisateurs les plus actifs en fonction du nombre de commentaires qu'ils ont postés. Cette table se met à jour en temps réel, offrant à l'administrateur des informations précieuses sur l'activité des utilisateurs sur le site.
      </Paragraph>
      <Image src={d} alt="Example Image" />
      <SectionTitle>.7 Users Management</SectionTitle>
      <Paragraph>
      Sur la page de gestion des utilisateurs, vous trouverez une liste complète des utilisateurs inscrits. Vous pourrez facilement ajouter, modifier ou supprimer des comptes. Des options de gestion telles que la réinitialisation du mot de passe, la modification des informations de profil et la gestion des rôles d'utilisateur seront également disponibles pour un contrôle total sur l'accès et les autorisations des utilisateurs.
      </Paragraph>
      <Image src={mu} alt="Example Image" />
      <SectionTitle>8. Add Recipe </SectionTitle>
      <Paragraph>
      Sur la page d'ajout de recette, vous trouverez un formulaire permettant de soumettre une nouvelle recette. Vous pourrez y entrer des informations telles que le titre, la description, les ingrédients, les étapes de préparation, et télécharger des images associées. Une fois toutes les informations remplies, vous pourrez publier la recette, qui sera alors visible pour les autres utilisateurs du site.
      </Paragraph>
      <Image src={ad} alt="Example Image" />
      <SectionTitle>9. Modifier ou Supprimer la recette </SectionTitle>
      <Paragraph>
      Pour l'administrateur, dans les détails de la recette, vous trouverez des options pour modifier ou supprimer la recette. Vous pourrez ainsi mettre à jour les informations de la recette
      </Paragraph>
      <Image src={cm} alt="Example Image" />

      <SectionTitle>10. Détails de la recette </SectionTitle>
      <Paragraph>
      Sur la page des détails de la recette, vous trouverez toutes les informations relatives à la recette sélectionnée, telles que le titre, les ingrédients, les instructions de préparation, ainsi que des informations nutritionnelles et le temps de préparation. Si vous êtes un administrateur, vous aurez la possibilité de modifier ou de supprimer la recette en cliquant sur les boutons correspondants. Pour les utilisateurs non administrateurs, vous pourrez ajouter la recette à vos favoris en un clic. Les commentaires des utilisateurs sont également affichés, avec des options pour ajouter, modifier ou supprimer les commentaires si vous êtes connecté en tant qu'administrateur.
      </Paragraph>
      <Image src={dr1} alt="Example Image" />
      <Image src={dr2} alt="Example Image" />

    </ManuelContainer>
  );
};

export default Manuel;