import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private defaultLanguage = 'es';

  constructor(private translate: TranslateService) {
    // Cargar idioma desde localStorage o usar el predeterminado
    const savedLanguage = localStorage.getItem('language') || this.defaultLanguage;
    this.setLanguage(savedLanguage);
  }

  setLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('language', language); // Guardar en el almacenamiento local
  }

  getLanguage(): string {
    return this.translate.currentLang || this.defaultLanguage;
  }
}
