import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//@NgModule est un décorateur TypeScript qui est utilisé pour déclarer un module. Un module en Angular est un mécanisme qui permet d'organiser et de regrouper des composants, des directives, des pipes et d'autres fonctionnalités liées à une partie spécifique de votre application. Les modules aident à rendre le code Angular plus modulaire, maintenable et réutilisable.
//Le décorateur @NgModule est utilisé pour déclarer un module en spécifiant les composants, directives, pipes et services qui seront disponibles dans ce module. Il est généralement utilisé pour regrouper les fonctionnalités liées à une partie spécifique de l'application. Un module peut également importer d'autres modules pour utiliser leurs fonctionnalités.

// En Angular, les directives sont des instructions qui vous permettent d'étendre le HTML avec de nouvelles fonctionnalités et de créer des composants réutilisables. Les directives sont l'un des éléments clés de la structure de l'application Angular. Elles vous permettent de manipuler le DOM (Document Object Model) et d'ajouter une logique métier à vos templates HTML.Il existe deux types principaux de directives en Angular :Directives structurelles(ngIf(comme struture conditionnelle) ,ngFor(comme boucle forEach)) : Ces directives modifient la structure du DOM en ajoutant ou en supprimant des éléments HTML en fonction de conditions ou de logique métier. Par exemple, la directive *ngIf permet de conditionner l'affichage d'un élément en fonction d'une expression booléenne.Directives d'attribut[(ngModel)] : Ces directives modifient le comportement ou l'apparence des éléments HTML en leur attribuant des comportements ou des styles spécifiques. Par exemple, la directive [ngClass] permet de conditionner les classes CSS appliquées à un élément en fonction d'une expression.
//EXEMPLE1
//<div *ngIf="estVisible">
//Cet élément est affiché si estVisible est vrai.
//</div>
//EXEMPLE2
//<div [ngClass]="{ 'text-important': estImportant, 'text-highlighted': estSurligne }">
  //Cet élément peut avoir des classes CSS conditionnelles.
//</div>

//En Angular, les "pipes" (pipes en anglais)(|) sont des outils permettant de transformer ou de formater les données affichées dans un modèle (template) Angular. Les pipes sont utilisés pour modifier l'apparence des données directement dans le modèle sans affecter la structure des données sous-jacentes.

//Les pipes sont très utiles pour des tâches courantes telles que le formatage de dates, la //conversion de texte en majuscules ou en minuscules, le tri de tableaux, etc. Angular propose de /nombreux pipes intégrés, et vous avez également la possibilité de créer vos propres pipes //personnalisés.

//Voici un exemple d'utilisation d'un pipe intégré pour formater une date dans un modèle Angular :{{ maDate | date: 'dd/MM/yyyy' }}

//Dans cet exemple, maDate est une variable contenant une date, et le pipe date est utilisé pour formater cette date en utilisant le format spécifié 'dd/MM/yyyy'.

//Angular fournit plusieurs pipes intégrés, tels que :

//date: Pour formater les dates.
//uppercase et lowercase: Pour convertir du texte en majuscules ou en minuscules.
//currency: Pour formater les valeurs numériques en tant que devises.
//number: Pour formater les nombres.
//json: Pour afficher des objets JavaScript sous forme de chaînes JSON.
//slice: Pour extraire une partie d'une chaîne.
//Vous pouvez également créer vos propres pipes personnalisés en utilisant la fonction Pipe de Angular. Les pipes sont un moyen puissant de gérer la présentation des données dans une application Angular, et ils contribuent à rendre le code plus réutilisable et plus maintenable.


@NgModule({
  // nos composants declarées
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // Nos modules importées
    BrowserModule,
    AppRoutingModule,
     // Module pour la creation des formulaires
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
