import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  standalone: true,
  imports: [CdkVirtualScrollViewport, CdkVirtualForOf, CdkFixedSizeVirtualScroll],
  templateUrl: './virtual-scroll.component.html',
  styleUrl: './virtual-scroll.component.scss',
})
export class VirtualScrollComponent {
  _list = signal(Array.from({ length: 1000 }).map((_, i) => `Item #${i}`));
}
