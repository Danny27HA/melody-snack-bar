import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  readonly whatsapp =
    "https://wa.me/525619810660?text=Hola%2C%20vi%20su%20tarjeta%20digital%20de%20Melody%20Snack%20Bar%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n.";

  readonly facebook =
    "https://www.facebook.com/share/1DHtNu9Sjg/?mibextid=wwXIfr";

  readonly maps = "https://maps.app.goo.gl/q8ZHt5mqDMEw8WxSA";
  readonly mapEmbed: SafeResourceUrl;

  readonly services = [
    {
      icon: "🍭",
      title: "Barras y mesas",
      text: "Barras de snacks, mesas de dulces, postres y fruta para todo tipo de celebración.",
    },
    {
      icon: "🎈",
      title: "Decoración de fiestas",
      text: "Montajes y decoración para cumpleaños, reuniones y eventos especiales.",
    },
    {
      icon: "🥤",
      title: "Bebidas e hielo",
      text: "Refresco, cerveza, vino e hielo para fiestas, reuniones y eventos.",
    },
    {
      icon: "🍹",
      title: "Bebidas preparadas",
      text: "Servicio de depósito y bebidas preparadas con y sin alcohol.",
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.mapEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.google.com/maps?q=19.4076597,-99.0378046&z=18&output=embed",
    );
  }
}
