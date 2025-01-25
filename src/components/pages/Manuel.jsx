import React from "react";
import styled from "styled-components";
import img from "../../healthy-tacos-recipe-181113-1.jpg"

const ManuelContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 210mm; /* Largeur A4 */
  min-height: 297mm; /* Hauteur A4 */
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
        La page d'accueil affiche une liste de recettes populaires. Vous pouvez
        naviguer entre les différentes catégories ou utiliser la barre de
        recherche pour trouver des recettes spécifiques.
      </Paragraph>
      <Image src={img} alt="Example Image" />

      <SectionTitle>2. Détails d'une Recette</SectionTitle>
      <Paragraph>
        En cliquant sur une recette, vous accédez à sa page de détails. Vous y
        trouverez la liste des ingrédients, les étapes de préparation, et les
        commentaires des utilisateurs.
      </Paragraph>

      <SectionTitle>3. Profil Utilisateur</SectionTitle>
      <Paragraph>
        Votre profil vous permet de gérer vos recettes favorites, de mettre à
        jour vos préférences, et de consulter votre historique de cuisine.
      </Paragraph>

      <SectionTitle>4. Tableau de Bord Admin</SectionTitle>
      <Paragraph>
        Les administrateurs peuvent accéder au tableau de bord pour gérer les
        recettes, les utilisateurs, et les catégories. Cette section est réservée
        aux utilisateurs ayant des privilèges d'administration.
      </Paragraph>
      <SectionTitle>3. Profil Utilisateur</SectionTitle>
      <Paragraph>
        Votre profil vous permet de gérer vos recettes favorites, de mettre à
        jour vos préférences, et de consulter votre historique de cuisine.
      </Paragraph>

      <SectionTitle>4. Tableau de Bord Admin</SectionTitle>
      <Paragraph>
        Les administrateurs peuvent accéder au tableau de bord pour gérer les
        recettes, les utilisateurs, et les catégories. Cette section est réservée
        aux utilisateurs ayant des privilèges d'administration.
      </Paragraph>
    </ManuelContainer>
  );
};

export default Manuel;