export interface TrainInfo {
  have_first_class?: boolean; // Наличие первого класса
  have_second_class?: boolean; // Наличие второго класса
  have_third_class?: boolean; // Наличие третьего класса
  have_fourth_class?: boolean; // Наличие четвертого класса
  have_wifi?: boolean; // Наличие Wi-Fi
  have_air_conditioning?: boolean; // Наличие кондиционера
  is_express?: boolean; // Экспресс поезд
  min_price?: number; // Минимальная цена
  available_seats: number;

  available_seats_info: {
    first?: number; // Количество мест первого класса
    second?: number; // Количество мест второго класса
    third?: number; // Количество мест третьего класса
    fourth?: number; // Количество мест четвертого класса
  };

  arrival?: {
    _id: string; // Идентификатор прибытия
    have_first_class: boolean; // Наличие первого класса
    have_second_class: boolean; // Наличие второго класса
    have_third_class: boolean; // Наличие третьего класса
    have_fourth_class: boolean; // Наличие четвертого класса
    have_wifi: boolean; // Наличие Wi-Fi
    have_air_conditioning: boolean; // Наличие кондиционера
    available_seats: number;

    available_seats_info: {
      first?: number; // Количество мест первого класса
      second?: number; // Количество мест второго класса
      third?: number; // Количество мест третьего класса
      fourth?: number; // Количество мест четвертого класса
    };

    train: {
      _id: string; // Идентификатор поезда
      name: string; // Название поезда
    };

    from: {
      railway_station_name?: string; // Название станции отправления
      city: {
        _id: string; // Идентификатор города
        name: string; // Название города
      };
      datetime: number; // Дата и время отправления в миллисекундах (UNIX timestamp)
    };

    to: {
      railway_station_name?: string; // Название станции назначения
      city: {
        _id: string; // Идентификатор города
        name: string; // Название города
      };
      datetime: number; // Дата и время прибытия в миллисекундах (UNIX timestamp)
    };

    min_price: number; // Минимальная цена
    duration: number; // Продолжительность в минутах

    price_info: {
      first?: {
        price?: number; // Основная цена первого класса
        top_price: number; // Максимальная цена первого класса
        bottom_price: number; // Минимальная цена первого класса
        side_price?: number; // Боковая цена первого класса (если применимо)
        linens_price?: number; // Цена за постельное белье первого класса
        wifi_price?: number; // Цена за Wi-Fi первого класса
      };
      second?: {
        price?: number; // Основная цена второго класса
        top_price: number; // Максимальная цена второго класса
        bottom_price: number; // Минимальная цена второго класса
        side_price?: number; // Боковая цена второго класса (если применимо)
        linens_price?: number; // Цена за постельное белье второго класса
        wifi_price?: number; // Цена за Wi-Fi второго класса
      };
      third?: {
        price?: number; // Основная цена третьего класса
        top_price: number; // Максимальная цена третьего класса
        bottom_price: number; // Минимальная цена третьего класса
        side_price?: number; // Боковая цена третьего класса (если применимо)
        linens_price?: number; // Цена за постельное белье третьего класса
        wifi_price?: number; // Цена за Wi-Fi третьего класса
      };
      fourth?: {
        price?: number; // Основная цена четвертого класса
        top_price: number; // Максимальная цена четвертого класса
        bottom_price: number; // Минимальная цена четвертого класса
        side_price?: number; // Боковая цена четвертого класса (если применимо)
        linens_price?: number; // Цена за постельное белье четвертого класса
        wifi_price?: number; // Цена за Wi-Fi четвертого класса
      };
    };
  };

  departure: {
    _id: string; // Идентификатор отправления
    have_first_class: boolean; // Наличие первого класса
    have_second_class: boolean; // Наличие второго класса
    have_third_class: boolean; // Наличие третьего класса
    have_fourth_class: boolean; // Наличие четвертого класса
    have_wifi: boolean; // Наличие Wi-Fi
    have_air_conditioning: boolean; // Наличие кондиционера
    available_seats: number;

    available_seats_info: {
      first?: number; // Количество мест первого класса
      second?: number; // Количество мест второго класса
      third?: number; // Количество мест третьего класса
      fourth?: number; // Количество мест четвертого класса
    };

    train: {
      _id: string; // Идентификатор поезда
      name: string; // Название поезда
    };

    from: {
      railway_station_name?: string; // Название станции отправления
      city: {
        _id: string; // Идентификатор города
        name: string; // Название города
      };
      datetime: number; // Дата и время отправления в миллисекундах (UNIX timestamp)
    };

    to: {
      railway_station_name?: string; // Название станции назначения
      city: {
        _id: string; // Идентификатор города
        name: string; // Название города
      };
      datetime: number; // Дата и время прибытия в миллисекундах (UNIX timestamp)
    };

    min_price: number; // Минимальная цена
    duration: number; // Продолжительность в минутах

    price_info: {
      first?: {
        price?: number; // Основная цена первого класса
        top_price: number; // Максимальная цена первого класса
        bottom_price: number; // Минимальная цена первого класса
        side_price?: number; // Боковая цена первого класса (если применимо)
        linens_price?: number; // Цена за постельное белье первого класса
        wifi_price?: number; // Цена за Wi-Fi первого класса
      };
      second?: {
        price?: number; // Основная цена второго класса
        top_price: number; // Максимальная цена второго класса
        bottom_price: number; // Минимальная цена второго класса
        side_price?: number; // Боковая цена второго класса (если применимо)
        linens_price?: number; // Цена за постельное белье второго класса
        wifi_price?: number; // Цена за Wi-Fi второго класса
      };
      third?: {
        price?: number; // Основная цена третьего класса
        top_price: number; // Максимальная цена третьего класса
        bottom_price: number; // Минимальная цена третьего класса
        side_price?: number; // Боковая цена третьего класса (если применимо)
        linens_price?: number; // Цена за постельное белье третьего класса
        wifi_price?: number; // Цена за Wi-Fi третьего класса
      };
      fourth?: {
        price?: number; // Основная цена четвертого класса
        top_price: number; // Максимальная цена четвертого класса
        bottom_price: number; // Минимальная цена четвертого класса
        side_price?: number; // Боковая цена четвертого класса (если применимо)
        linens_price?: number; // Цена за постельное белье четвертого класса
        wifi_price?: number; // Цена за Wi-Fi четвертого класса
      };
    };
  };
}