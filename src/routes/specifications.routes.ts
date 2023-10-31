import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const specificationService = new CreateSpecificationUseCase(
    specificationRepository
  );
  const { name, description } = request.body;

  specificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const specificationService = new CreateSpecificationUseCase(
    specificationRepository
  );
  const listSpecifications = specificationService.list();

  return response.status(200).send(listSpecifications);
});
export { specificationsRoutes };
