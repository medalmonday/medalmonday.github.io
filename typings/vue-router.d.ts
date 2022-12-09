import { UserRole } from 'src/models/User';
import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
    description?: string;
  }
}
