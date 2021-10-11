import info, {CountryInfo} from './info';

const _countryInfoList: CountryInfo[] = [];
const _countryInfoMap: Map<string, CountryInfo> = new Map();

interface ICountryUtil {
  get(countryCode: string): CountryInfo | undefined;
  asList(): CountryInfo[];
}

class CountryUtil implements ICountryUtil {
  get(countryCode: string): CountryInfo | undefined {
    return _countryInfoMap.get(countryCode);
  }

  asList(): CountryInfo[] {
    return _countryInfoList;
  }

  constructor() {
    Object.keys(info).map(countryCode => {
      const countryInfo = info[countryCode];

      _countryInfoMap.set(countryCode, countryInfo);

      _countryInfoList.push(countryInfo);
    });
  }
}

const countries = new CountryUtil();

export default countries;
