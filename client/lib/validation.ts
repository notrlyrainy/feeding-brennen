import { ApiError } from '@/lib/errors';


export function validateRestaurant(body: unknown) {
  if(typeof body !== 'object' || body === null)
  {
    throw new ApiError(400, 'Invalid request body');
  }

  const {name, cuisine, address, rating} = body as Record<string, unknown>;

  if(typeof name !== 'string' || name.trim() === '')
  {
    throw new ApiError(400, 'name is required');
  }

  if(cuisine !== undefined && cuisine !== null && typeof cuisine !== 'string')
  {
    throw new ApiError(400, 'cuisine must be a string');
  }

  if(address !== undefined && address !== null && typeof address !== 'string')
  {
    throw new ApiError(400, 'address must be a string');
  }

  if(typeof rating !== 'number' || !Number.isFinite(rating))
  {
    throw new ApiError(400, 'rating must be a number');
  }

  if(rating < 0 || rating > 5)
  {
    throw new ApiError(400, 'rating must be between 0 and 5');
  }

  return {
    name: name.trim(),
    cuisine: cuisine ?? null,
    address: address ?? null,
    rating,
  };
}