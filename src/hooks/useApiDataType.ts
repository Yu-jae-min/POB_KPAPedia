import xml2js from 'xml2js';

interface IXmlChangeType {
  [index: string]: string | [string];
}

export const boxOfficeXmlChange = (xml: string) => {
  let newData;

  new xml2js.Parser().parseString(xml, (err, result) => {
    const changeValue = result.boxofs.boxof.map((item: IXmlChangeType) => {
      const keys = Object.keys(item);

      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const value = item[key];

        item[key] = String(value);
      }

      return item;
    });

    newData = changeValue;
  });

  return newData;
};

export const handleXmlChange = (xml: string) => {
  let newData;

  console.log('xml', xml);

  new xml2js.Parser().parseString(xml, (err, result) => {
    // eslint-disable-next-line prettier/prettier
    console.log('result', result);

    const changeValue = result.dbs.db.map((item: IXmlChangeType) => {
      const keys = Object.keys(item);

      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const value = item[key];

        item[key] = String(value);
      }

      return item;
    });

    newData = changeValue;
  });

  return newData;
};
