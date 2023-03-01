export const BACKEND_URL = 'http://localhost:8000/';

// const TOKEN = 'QWlzaHdhcnlhIE4=';

// export const authHeader = {
//   Authorization: 'Bearer ' + TOKEN,
// };

export const GET_ALL_EVENTS = {
  url: 'api/events',
  method: 'GET',
};

export const GET_ONE_EVENT = (id) => ({
  url: `api/events/${id}`,
  method: 'GET',
});

export const UPDATE_EVENT = (id) => ({
  url: `api/events/${id}`,
  method: 'PATCH',
});
