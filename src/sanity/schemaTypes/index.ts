import { type SchemaTypeDefinition } from 'sanity';
import recommendedcar from '../recommendedcar';
import popularcar from '../popularcar';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [popularcar , recommendedcar]
}
