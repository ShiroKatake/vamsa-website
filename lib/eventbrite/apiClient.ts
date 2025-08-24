const getOrganizations = async () => {
  try {
    const response = await fetch(
      'https://www.eventbriteapi.com/v3/users/me/organizations',
      {
        headers: {
          Authorization: `Bearer ${process.env.EVENTBRITE_PRIVATE_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    return data.organizations;
  } catch (error) {
    console.error('error', error);
  }
};

export const enum EventStatus {
  DRAFT = 'draft',
  LIVE = 'live',
  STARTED = 'started',
  ENDED = 'ended',
  CANCELLED = 'cancelled',
}

export const getEvents = async (status: EventStatus = EventStatus.LIVE) => {
  try {
    const organizations = await getOrganizations();
    const orgId = organizations[0].id;
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/?status=${status}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.EVENTBRITE_PRIVATE_TOKEN}`,
        },
      },
    );
    const data = await response.json();
    return data.events;
  } catch (error) {
    console.error('error', error);
  }
};
