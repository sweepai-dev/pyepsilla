class Field {
  name: string;
  data_type: string;
  primary_key: boolean;
  dimensions: number;

  constructor(name: string, data_type: string, primary_key: boolean, dimensions: number) {
    this.name = name;
    this.data_type = data_type;
    this.primary_key = primary_key;
    this.dimensions = dimensions;
  }
}

enum FieldType {
  INT1 = 1,  // TINYINT
  INT2 = 2,  // SMALLINT
  INT4 = 3,  // INT
  INT8 = 4,  // BIGINT
  FLOAT = 10,
  DOUBLE = 11,
  STRING = 20,
  BOOL = 30,
  VECTOR_FLOAT = 40,
  VECTOR_DOUBLE = 41,
  UNKNOWN = 999
}

export { Field, FieldType };