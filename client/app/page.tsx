import { getRestaurants } from '@/lib/apiClient';




type Props = {
  searchParams: {
    cuisine?: string;
  };
};

// Server component. Fetches restaurants on each request and renders a plain
// list. There is no loading state, no empty state, and no error handling: if
// the API is down or returns something unexpected, this throws.
export default async function HomePage({searchParams}: Props) {
  const restaurants = await getRestaurants(searchParams.cuisine);

  return (
    <div>
      <div className="mb-4">
        <h2 className="mb-4 text-lg font-medium">Restaurants</h2>
        <form>
          <select
            name="cuisine"
            defaultValue={searchParams.cuisine ?? ''}
            className="rounded border border-gray-300 px-3 py-2 dark:border-gray-800 dark:bg-gray-600"
          >
            <option value="">All Cuisines</option>
            <option value="American">American</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
          </select>

          <button
            type="submit"
            className="ml-2 rounded bg-black px-3 py-2 text-white dark:bg-gray-600"
          > Filter</button>
        </form>
      </div>
      <ul className="space-y-3">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-medium">{restaurant.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {restaurant.rating}★
              </span>
            </div>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {restaurant.cuisine} · {restaurant.address}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
