// Importer les modules
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importer le composant à utiliser dans le route
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';

// Création du tableau de routes
const appRoutes: Routes = [

  // Définition de la route principale
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatComponent }
];

// Exporter le Routing
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);