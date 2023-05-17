import { useState } from 'react';
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';

import Header from '../../components/header';
import { tokens } from '../../theme';

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you wand to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={'20px'}>
      <Header title={'CALENDAR'} subtitle={'Full Calendar Interative Page'} />
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box
          flex={'1 1 20%'}
          backgroundColor={colors.primary[400]}
          p={'15px'}
          borderRadius={'4px'}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvent.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px',
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {
                        (formatDate(event.start),
                        {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      }
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex={'1 1 100%'} ml={'15px'}>
          <FullCalendar
            height={'75vh'}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev, next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvent(events)}
            initialEvents={[
              {
                id: '12134',
                title: 'all-day evevnt',
                start: '2023-05-02',
                end: '2023-05-02',
              },
              {
                id: '41311',
                title: 'Timed evevnt',
                start: '2023-05-13',
                end: '2023-05-13',
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
