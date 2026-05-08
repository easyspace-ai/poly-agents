
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Market
 * 
 */
export type Market = $Result.DefaultSelection<Prisma.$MarketPayload>
/**
 * Model Outcome
 * 
 */
export type Outcome = $Result.DefaultSelection<Prisma.$OutcomePayload>
/**
 * Model CanonicalBet
 * 
 */
export type CanonicalBet = $Result.DefaultSelection<Prisma.$CanonicalBetPayload>
/**
 * Model TeamAlias
 * 
 */
export type TeamAlias = $Result.DefaultSelection<Prisma.$TeamAliasPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model BotConfig
 * 
 */
export type BotConfig = $Result.DefaultSelection<Prisma.$BotConfigPayload>
/**
 * Model PolymarketAccount
 * *
 *  * Stored Polymarket CLOB credentials; exactly one row may have `isActive` for trading.
 *  * CLOB V2 POLY_1271: `funderAddress` is the CREATE2 deposit wallet for the EOA (usually auto-filled when adding via private key only).
 */
export type PolymarketAccount = $Result.DefaultSelection<Prisma.$PolymarketAccountPayload>
/**
 * Model RiskPosition
 * * Open Polymarket YES position tracked for dashboard 风控 (bot fills + CLOB user channel / REST sync).
 */
export type RiskPosition = $Result.DefaultSelection<Prisma.$RiskPositionPayload>
/**
 * Model RiskAppliedClobTrade
 * * Dedupe Polymarket CLOB trade ids applied to RiskPosition (user channel + REST fallback).
 */
export type RiskAppliedClobTrade = $Result.DefaultSelection<Prisma.$RiskAppliedClobTradePayload>
/**
 * Model RiskTask
 * * Retryable stop-loss / manual close jobs (FOK sell with 10-tick slippage floor).
 */
export type RiskTask = $Result.DefaultSelection<Prisma.$RiskTaskPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.market`: Exposes CRUD operations for the **Market** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.market.findMany()
    * ```
    */
  get market(): Prisma.MarketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outcome`: Exposes CRUD operations for the **Outcome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outcomes
    * const outcomes = await prisma.outcome.findMany()
    * ```
    */
  get outcome(): Prisma.OutcomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.canonicalBet`: Exposes CRUD operations for the **CanonicalBet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CanonicalBets
    * const canonicalBets = await prisma.canonicalBet.findMany()
    * ```
    */
  get canonicalBet(): Prisma.CanonicalBetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamAlias`: Exposes CRUD operations for the **TeamAlias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamAliases
    * const teamAliases = await prisma.teamAlias.findMany()
    * ```
    */
  get teamAlias(): Prisma.TeamAliasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.botConfig`: Exposes CRUD operations for the **BotConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BotConfigs
    * const botConfigs = await prisma.botConfig.findMany()
    * ```
    */
  get botConfig(): Prisma.BotConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.polymarketAccount`: Exposes CRUD operations for the **PolymarketAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolymarketAccounts
    * const polymarketAccounts = await prisma.polymarketAccount.findMany()
    * ```
    */
  get polymarketAccount(): Prisma.PolymarketAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskPosition`: Exposes CRUD operations for the **RiskPosition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskPositions
    * const riskPositions = await prisma.riskPosition.findMany()
    * ```
    */
  get riskPosition(): Prisma.RiskPositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskAppliedClobTrade`: Exposes CRUD operations for the **RiskAppliedClobTrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskAppliedClobTrades
    * const riskAppliedClobTrades = await prisma.riskAppliedClobTrade.findMany()
    * ```
    */
  get riskAppliedClobTrade(): Prisma.RiskAppliedClobTradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskTask`: Exposes CRUD operations for the **RiskTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskTasks
    * const riskTasks = await prisma.riskTask.findMany()
    * ```
    */
  get riskTask(): Prisma.RiskTaskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    Market: 'Market',
    Outcome: 'Outcome',
    CanonicalBet: 'CanonicalBet',
    TeamAlias: 'TeamAlias',
    Trade: 'Trade',
    BotConfig: 'BotConfig',
    PolymarketAccount: 'PolymarketAccount',
    RiskPosition: 'RiskPosition',
    RiskAppliedClobTrade: 'RiskAppliedClobTrade',
    RiskTask: 'RiskTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "event" | "market" | "outcome" | "canonicalBet" | "teamAlias" | "trade" | "botConfig" | "polymarketAccount" | "riskPosition" | "riskAppliedClobTrade" | "riskTask"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Market: {
        payload: Prisma.$MarketPayload<ExtArgs>
        fields: Prisma.MarketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findFirst: {
            args: Prisma.MarketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          findMany: {
            args: Prisma.MarketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          create: {
            args: Prisma.MarketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          createMany: {
            args: Prisma.MarketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          delete: {
            args: Prisma.MarketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          update: {
            args: Prisma.MarketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          deleteMany: {
            args: Prisma.MarketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>[]
          }
          upsert: {
            args: Prisma.MarketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketPayload>
          }
          aggregate: {
            args: Prisma.MarketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarket>
          }
          groupBy: {
            args: Prisma.MarketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketCountArgs<ExtArgs>
            result: $Utils.Optional<MarketCountAggregateOutputType> | number
          }
        }
      }
      Outcome: {
        payload: Prisma.$OutcomePayload<ExtArgs>
        fields: Prisma.OutcomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutcomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutcomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          findFirst: {
            args: Prisma.OutcomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutcomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          findMany: {
            args: Prisma.OutcomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          create: {
            args: Prisma.OutcomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          createMany: {
            args: Prisma.OutcomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutcomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          delete: {
            args: Prisma.OutcomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          update: {
            args: Prisma.OutcomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          deleteMany: {
            args: Prisma.OutcomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutcomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutcomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>[]
          }
          upsert: {
            args: Prisma.OutcomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutcomePayload>
          }
          aggregate: {
            args: Prisma.OutcomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutcome>
          }
          groupBy: {
            args: Prisma.OutcomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutcomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutcomeCountArgs<ExtArgs>
            result: $Utils.Optional<OutcomeCountAggregateOutputType> | number
          }
        }
      }
      CanonicalBet: {
        payload: Prisma.$CanonicalBetPayload<ExtArgs>
        fields: Prisma.CanonicalBetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CanonicalBetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CanonicalBetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>
          }
          findFirst: {
            args: Prisma.CanonicalBetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CanonicalBetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>
          }
          findMany: {
            args: Prisma.CanonicalBetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>[]
          }
          create: {
            args: Prisma.CanonicalBetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>
          }
          createMany: {
            args: Prisma.CanonicalBetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CanonicalBetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>[]
          }
          delete: {
            args: Prisma.CanonicalBetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>
          }
          update: {
            args: Prisma.CanonicalBetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>
          }
          deleteMany: {
            args: Prisma.CanonicalBetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CanonicalBetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CanonicalBetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>[]
          }
          upsert: {
            args: Prisma.CanonicalBetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CanonicalBetPayload>
          }
          aggregate: {
            args: Prisma.CanonicalBetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCanonicalBet>
          }
          groupBy: {
            args: Prisma.CanonicalBetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CanonicalBetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CanonicalBetCountArgs<ExtArgs>
            result: $Utils.Optional<CanonicalBetCountAggregateOutputType> | number
          }
        }
      }
      TeamAlias: {
        payload: Prisma.$TeamAliasPayload<ExtArgs>
        fields: Prisma.TeamAliasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamAliasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamAliasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>
          }
          findFirst: {
            args: Prisma.TeamAliasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamAliasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>
          }
          findMany: {
            args: Prisma.TeamAliasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>[]
          }
          create: {
            args: Prisma.TeamAliasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>
          }
          createMany: {
            args: Prisma.TeamAliasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamAliasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>[]
          }
          delete: {
            args: Prisma.TeamAliasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>
          }
          update: {
            args: Prisma.TeamAliasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>
          }
          deleteMany: {
            args: Prisma.TeamAliasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamAliasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamAliasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>[]
          }
          upsert: {
            args: Prisma.TeamAliasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamAliasPayload>
          }
          aggregate: {
            args: Prisma.TeamAliasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamAlias>
          }
          groupBy: {
            args: Prisma.TeamAliasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamAliasGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamAliasCountArgs<ExtArgs>
            result: $Utils.Optional<TeamAliasCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      BotConfig: {
        payload: Prisma.$BotConfigPayload<ExtArgs>
        fields: Prisma.BotConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BotConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BotConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          findFirst: {
            args: Prisma.BotConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BotConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          findMany: {
            args: Prisma.BotConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>[]
          }
          create: {
            args: Prisma.BotConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          createMany: {
            args: Prisma.BotConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BotConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>[]
          }
          delete: {
            args: Prisma.BotConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          update: {
            args: Prisma.BotConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          deleteMany: {
            args: Prisma.BotConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BotConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BotConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>[]
          }
          upsert: {
            args: Prisma.BotConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BotConfigPayload>
          }
          aggregate: {
            args: Prisma.BotConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBotConfig>
          }
          groupBy: {
            args: Prisma.BotConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<BotConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.BotConfigCountArgs<ExtArgs>
            result: $Utils.Optional<BotConfigCountAggregateOutputType> | number
          }
        }
      }
      PolymarketAccount: {
        payload: Prisma.$PolymarketAccountPayload<ExtArgs>
        fields: Prisma.PolymarketAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolymarketAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolymarketAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>
          }
          findFirst: {
            args: Prisma.PolymarketAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolymarketAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>
          }
          findMany: {
            args: Prisma.PolymarketAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>[]
          }
          create: {
            args: Prisma.PolymarketAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>
          }
          createMany: {
            args: Prisma.PolymarketAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolymarketAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>[]
          }
          delete: {
            args: Prisma.PolymarketAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>
          }
          update: {
            args: Prisma.PolymarketAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>
          }
          deleteMany: {
            args: Prisma.PolymarketAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolymarketAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolymarketAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>[]
          }
          upsert: {
            args: Prisma.PolymarketAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolymarketAccountPayload>
          }
          aggregate: {
            args: Prisma.PolymarketAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolymarketAccount>
          }
          groupBy: {
            args: Prisma.PolymarketAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolymarketAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolymarketAccountCountArgs<ExtArgs>
            result: $Utils.Optional<PolymarketAccountCountAggregateOutputType> | number
          }
        }
      }
      RiskPosition: {
        payload: Prisma.$RiskPositionPayload<ExtArgs>
        fields: Prisma.RiskPositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskPositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskPositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>
          }
          findFirst: {
            args: Prisma.RiskPositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskPositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>
          }
          findMany: {
            args: Prisma.RiskPositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>[]
          }
          create: {
            args: Prisma.RiskPositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>
          }
          createMany: {
            args: Prisma.RiskPositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskPositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>[]
          }
          delete: {
            args: Prisma.RiskPositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>
          }
          update: {
            args: Prisma.RiskPositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>
          }
          deleteMany: {
            args: Prisma.RiskPositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskPositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskPositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>[]
          }
          upsert: {
            args: Prisma.RiskPositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskPositionPayload>
          }
          aggregate: {
            args: Prisma.RiskPositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskPosition>
          }
          groupBy: {
            args: Prisma.RiskPositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskPositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskPositionCountArgs<ExtArgs>
            result: $Utils.Optional<RiskPositionCountAggregateOutputType> | number
          }
        }
      }
      RiskAppliedClobTrade: {
        payload: Prisma.$RiskAppliedClobTradePayload<ExtArgs>
        fields: Prisma.RiskAppliedClobTradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskAppliedClobTradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskAppliedClobTradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>
          }
          findFirst: {
            args: Prisma.RiskAppliedClobTradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskAppliedClobTradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>
          }
          findMany: {
            args: Prisma.RiskAppliedClobTradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>[]
          }
          create: {
            args: Prisma.RiskAppliedClobTradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>
          }
          createMany: {
            args: Prisma.RiskAppliedClobTradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskAppliedClobTradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>[]
          }
          delete: {
            args: Prisma.RiskAppliedClobTradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>
          }
          update: {
            args: Prisma.RiskAppliedClobTradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>
          }
          deleteMany: {
            args: Prisma.RiskAppliedClobTradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskAppliedClobTradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskAppliedClobTradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>[]
          }
          upsert: {
            args: Prisma.RiskAppliedClobTradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskAppliedClobTradePayload>
          }
          aggregate: {
            args: Prisma.RiskAppliedClobTradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskAppliedClobTrade>
          }
          groupBy: {
            args: Prisma.RiskAppliedClobTradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskAppliedClobTradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskAppliedClobTradeCountArgs<ExtArgs>
            result: $Utils.Optional<RiskAppliedClobTradeCountAggregateOutputType> | number
          }
        }
      }
      RiskTask: {
        payload: Prisma.$RiskTaskPayload<ExtArgs>
        fields: Prisma.RiskTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>
          }
          findFirst: {
            args: Prisma.RiskTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>
          }
          findMany: {
            args: Prisma.RiskTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>[]
          }
          create: {
            args: Prisma.RiskTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>
          }
          createMany: {
            args: Prisma.RiskTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>[]
          }
          delete: {
            args: Prisma.RiskTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>
          }
          update: {
            args: Prisma.RiskTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>
          }
          deleteMany: {
            args: Prisma.RiskTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>[]
          }
          upsert: {
            args: Prisma.RiskTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskTaskPayload>
          }
          aggregate: {
            args: Prisma.RiskTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskTask>
          }
          groupBy: {
            args: Prisma.RiskTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskTaskCountArgs<ExtArgs>
            result: $Utils.Optional<RiskTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    event?: EventOmit
    market?: MarketOmit
    outcome?: OutcomeOmit
    canonicalBet?: CanonicalBetOmit
    teamAlias?: TeamAliasOmit
    trade?: TradeOmit
    botConfig?: BotConfigOmit
    polymarketAccount?: PolymarketAccountOmit
    riskPosition?: RiskPositionOmit
    riskAppliedClobTrade?: RiskAppliedClobTradeOmit
    riskTask?: RiskTaskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    markets: number
    canonicalBets: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    markets?: boolean | EventCountOutputTypeCountMarketsArgs
    canonicalBets?: boolean | EventCountOutputTypeCountCanonicalBetsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountMarketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountCanonicalBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanonicalBetWhereInput
  }


  /**
   * Count Type MarketCountOutputType
   */

  export type MarketCountOutputType = {
    outcomes: number
    trades: number
  }

  export type MarketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcomes?: boolean | MarketCountOutputTypeCountOutcomesArgs
    trades?: boolean | MarketCountOutputTypeCountTradesArgs
  }

  // Custom InputTypes
  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketCountOutputType
     */
    select?: MarketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountOutcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
  }

  /**
   * MarketCountOutputType without action
   */
  export type MarketCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Count Type OutcomeCountOutputType
   */

  export type OutcomeCountOutputType = {
    trades: number
    riskPositions: number
  }

  export type OutcomeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | OutcomeCountOutputTypeCountTradesArgs
    riskPositions?: boolean | OutcomeCountOutputTypeCountRiskPositionsArgs
  }

  // Custom InputTypes
  /**
   * OutcomeCountOutputType without action
   */
  export type OutcomeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutcomeCountOutputType
     */
    select?: OutcomeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutcomeCountOutputType without action
   */
  export type OutcomeCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * OutcomeCountOutputType without action
   */
  export type OutcomeCountOutputTypeCountRiskPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskPositionWhereInput
  }


  /**
   * Count Type CanonicalBetCountOutputType
   */

  export type CanonicalBetCountOutputType = {
    outcomes: number
  }

  export type CanonicalBetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcomes?: boolean | CanonicalBetCountOutputTypeCountOutcomesArgs
  }

  // Custom InputTypes
  /**
   * CanonicalBetCountOutputType without action
   */
  export type CanonicalBetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBetCountOutputType
     */
    select?: CanonicalBetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CanonicalBetCountOutputType without action
   */
  export type CanonicalBetCountOutputTypeCountOutcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
  }


  /**
   * Count Type RiskPositionCountOutputType
   */

  export type RiskPositionCountOutputType = {
    tasks: number
  }

  export type RiskPositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | RiskPositionCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * RiskPositionCountOutputType without action
   */
  export type RiskPositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPositionCountOutputType
     */
    select?: RiskPositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiskPositionCountOutputType without action
   */
  export type RiskPositionCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    sport: string | null
    league: string | null
    homeTeam: string | null
    awayTeam: string | null
    startTime: Date | null
    status: string | null
    sxEventId: string | null
    polyEventId: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    sport: string | null
    league: string | null
    homeTeam: string | null
    awayTeam: string | null
    startTime: Date | null
    status: string | null
    sxEventId: string | null
    polyEventId: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    sport: number
    league: number
    homeTeam: number
    awayTeam: number
    startTime: number
    status: number
    sxEventId: number
    polyEventId: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    sport?: true
    league?: true
    homeTeam?: true
    awayTeam?: true
    startTime?: true
    status?: true
    sxEventId?: true
    polyEventId?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    sport?: true
    league?: true
    homeTeam?: true
    awayTeam?: true
    startTime?: true
    status?: true
    sxEventId?: true
    polyEventId?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    sport?: true
    league?: true
    homeTeam?: true
    awayTeam?: true
    startTime?: true
    status?: true
    sxEventId?: true
    polyEventId?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date
    status: string
    sxEventId: string | null
    polyEventId: string | null
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sport?: boolean
    league?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    startTime?: boolean
    status?: boolean
    sxEventId?: boolean
    polyEventId?: boolean
    createdAt?: boolean
    markets?: boolean | Event$marketsArgs<ExtArgs>
    canonicalBets?: boolean | Event$canonicalBetsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sport?: boolean
    league?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    startTime?: boolean
    status?: boolean
    sxEventId?: boolean
    polyEventId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sport?: boolean
    league?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    startTime?: boolean
    status?: boolean
    sxEventId?: boolean
    polyEventId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    sport?: boolean
    league?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    startTime?: boolean
    status?: boolean
    sxEventId?: boolean
    polyEventId?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sport" | "league" | "homeTeam" | "awayTeam" | "startTime" | "status" | "sxEventId" | "polyEventId" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    markets?: boolean | Event$marketsArgs<ExtArgs>
    canonicalBets?: boolean | Event$canonicalBetsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      markets: Prisma.$MarketPayload<ExtArgs>[]
      canonicalBets: Prisma.$CanonicalBetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sport: string
      league: string
      homeTeam: string
      awayTeam: string
      startTime: Date
      status: string
      sxEventId: string | null
      polyEventId: string | null
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    markets<T extends Event$marketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$marketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    canonicalBets<T extends Event$canonicalBetsArgs<ExtArgs> = {}>(args?: Subset<T, Event$canonicalBetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly sport: FieldRef<"Event", 'String'>
    readonly league: FieldRef<"Event", 'String'>
    readonly homeTeam: FieldRef<"Event", 'String'>
    readonly awayTeam: FieldRef<"Event", 'String'>
    readonly startTime: FieldRef<"Event", 'DateTime'>
    readonly status: FieldRef<"Event", 'String'>
    readonly sxEventId: FieldRef<"Event", 'String'>
    readonly polyEventId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.markets
   */
  export type Event$marketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    cursor?: MarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Event.canonicalBets
   */
  export type Event$canonicalBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    where?: CanonicalBetWhereInput
    orderBy?: CanonicalBetOrderByWithRelationInput | CanonicalBetOrderByWithRelationInput[]
    cursor?: CanonicalBetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CanonicalBetScalarFieldEnum | CanonicalBetScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Market
   */

  export type AggregateMarket = {
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  export type MarketAvgAggregateOutputType = {
    line: number | null
  }

  export type MarketSumAggregateOutputType = {
    line: number | null
  }

  export type MarketMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    platform: string | null
    externalId: string | null
    startTime: Date | null
    betType: string | null
    line: number | null
    mainLine: boolean | null
    status: string | null
    createdAt: Date | null
  }

  export type MarketMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    platform: string | null
    externalId: string | null
    startTime: Date | null
    betType: string | null
    line: number | null
    mainLine: boolean | null
    status: string | null
    createdAt: Date | null
  }

  export type MarketCountAggregateOutputType = {
    id: number
    eventId: number
    platform: number
    externalId: number
    startTime: number
    betType: number
    line: number
    mainLine: number
    status: number
    createdAt: number
    _all: number
  }


  export type MarketAvgAggregateInputType = {
    line?: true
  }

  export type MarketSumAggregateInputType = {
    line?: true
  }

  export type MarketMinAggregateInputType = {
    id?: true
    eventId?: true
    platform?: true
    externalId?: true
    startTime?: true
    betType?: true
    line?: true
    mainLine?: true
    status?: true
    createdAt?: true
  }

  export type MarketMaxAggregateInputType = {
    id?: true
    eventId?: true
    platform?: true
    externalId?: true
    startTime?: true
    betType?: true
    line?: true
    mainLine?: true
    status?: true
    createdAt?: true
  }

  export type MarketCountAggregateInputType = {
    id?: true
    eventId?: true
    platform?: true
    externalId?: true
    startTime?: true
    betType?: true
    line?: true
    mainLine?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type MarketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Market to aggregate.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketMaxAggregateInputType
  }

  export type GetMarketAggregateType<T extends MarketAggregateArgs> = {
        [P in keyof T & keyof AggregateMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarket[P]>
      : GetScalarType<T[P], AggregateMarket[P]>
  }




  export type MarketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketWhereInput
    orderBy?: MarketOrderByWithAggregationInput | MarketOrderByWithAggregationInput[]
    by: MarketScalarFieldEnum[] | MarketScalarFieldEnum
    having?: MarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketCountAggregateInputType | true
    _avg?: MarketAvgAggregateInputType
    _sum?: MarketSumAggregateInputType
    _min?: MarketMinAggregateInputType
    _max?: MarketMaxAggregateInputType
  }

  export type MarketGroupByOutputType = {
    id: string
    eventId: string
    platform: string
    externalId: string
    startTime: Date
    betType: string
    line: number | null
    mainLine: boolean
    status: string
    createdAt: Date
    _count: MarketCountAggregateOutputType | null
    _avg: MarketAvgAggregateOutputType | null
    _sum: MarketSumAggregateOutputType | null
    _min: MarketMinAggregateOutputType | null
    _max: MarketMaxAggregateOutputType | null
  }

  type GetMarketGroupByPayload<T extends MarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketGroupByOutputType[P]>
            : GetScalarType<T[P], MarketGroupByOutputType[P]>
        }
      >
    >


  export type MarketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    platform?: boolean
    externalId?: boolean
    startTime?: boolean
    betType?: boolean
    line?: boolean
    mainLine?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    outcomes?: boolean | Market$outcomesArgs<ExtArgs>
    trades?: boolean | Market$tradesArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    platform?: boolean
    externalId?: boolean
    startTime?: boolean
    betType?: boolean
    line?: boolean
    mainLine?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    platform?: boolean
    externalId?: boolean
    startTime?: boolean
    betType?: boolean
    line?: boolean
    mainLine?: boolean
    status?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["market"]>

  export type MarketSelectScalar = {
    id?: boolean
    eventId?: boolean
    platform?: boolean
    externalId?: boolean
    startTime?: boolean
    betType?: boolean
    line?: boolean
    mainLine?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type MarketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "platform" | "externalId" | "startTime" | "betType" | "line" | "mainLine" | "status" | "createdAt", ExtArgs["result"]["market"]>
  export type MarketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    outcomes?: boolean | Market$outcomesArgs<ExtArgs>
    trades?: boolean | Market$tradesArgs<ExtArgs>
    _count?: boolean | MarketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type MarketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $MarketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Market"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      outcomes: Prisma.$OutcomePayload<ExtArgs>[]
      trades: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      platform: string
      externalId: string
      startTime: Date
      betType: string
      line: number | null
      mainLine: boolean
      status: string
      createdAt: Date
    }, ExtArgs["result"]["market"]>
    composites: {}
  }

  type MarketGetPayload<S extends boolean | null | undefined | MarketDefaultArgs> = $Result.GetResult<Prisma.$MarketPayload, S>

  type MarketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketCountAggregateInputType | true
    }

  export interface MarketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Market'], meta: { name: 'Market' } }
    /**
     * Find zero or one Market that matches the filter.
     * @param {MarketFindUniqueArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketFindUniqueArgs>(args: SelectSubset<T, MarketFindUniqueArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Market that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketFindUniqueOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketFindFirstArgs>(args?: SelectSubset<T, MarketFindFirstArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Market that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindFirstOrThrowArgs} args - Arguments to find a Market
     * @example
     * // Get one Market
     * const market = await prisma.market.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.market.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.market.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketWithIdOnly = await prisma.market.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketFindManyArgs>(args?: SelectSubset<T, MarketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Market.
     * @param {MarketCreateArgs} args - Arguments to create a Market.
     * @example
     * // Create one Market
     * const Market = await prisma.market.create({
     *   data: {
     *     // ... data to create a Market
     *   }
     * })
     * 
     */
    create<T extends MarketCreateArgs>(args: SelectSubset<T, MarketCreateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketCreateManyArgs>(args?: SelectSubset<T, MarketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const market = await prisma.market.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Market.
     * @param {MarketDeleteArgs} args - Arguments to delete one Market.
     * @example
     * // Delete one Market
     * const Market = await prisma.market.delete({
     *   where: {
     *     // ... filter to delete one Market
     *   }
     * })
     * 
     */
    delete<T extends MarketDeleteArgs>(args: SelectSubset<T, MarketDeleteArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Market.
     * @param {MarketUpdateArgs} args - Arguments to update one Market.
     * @example
     * // Update one Market
     * const market = await prisma.market.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketUpdateArgs>(args: SelectSubset<T, MarketUpdateArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.market.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDeleteManyArgs>(args?: SelectSubset<T, MarketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketUpdateManyArgs>(args: SelectSubset<T, MarketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const market = await prisma.market.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketWithIdOnly = await prisma.market.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Market.
     * @param {MarketUpsertArgs} args - Arguments to update or create a Market.
     * @example
     * // Update or create a Market
     * const market = await prisma.market.upsert({
     *   create: {
     *     // ... data to create a Market
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Market we want to update
     *   }
     * })
     */
    upsert<T extends MarketUpsertArgs>(args: SelectSubset<T, MarketUpsertArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.market.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketCountArgs>(
      args?: Subset<T, MarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketAggregateArgs>(args: Subset<T, MarketAggregateArgs>): Prisma.PrismaPromise<GetMarketAggregateType<T>>

    /**
     * Group by Market.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketGroupByArgs['orderBy'] }
        : { orderBy?: MarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Market model
   */
  readonly fields: MarketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Market.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outcomes<T extends Market$outcomesArgs<ExtArgs> = {}>(args?: Subset<T, Market$outcomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trades<T extends Market$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Market$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Market model
   */
  interface MarketFieldRefs {
    readonly id: FieldRef<"Market", 'String'>
    readonly eventId: FieldRef<"Market", 'String'>
    readonly platform: FieldRef<"Market", 'String'>
    readonly externalId: FieldRef<"Market", 'String'>
    readonly startTime: FieldRef<"Market", 'DateTime'>
    readonly betType: FieldRef<"Market", 'String'>
    readonly line: FieldRef<"Market", 'Float'>
    readonly mainLine: FieldRef<"Market", 'Boolean'>
    readonly status: FieldRef<"Market", 'String'>
    readonly createdAt: FieldRef<"Market", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Market findUnique
   */
  export type MarketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findUniqueOrThrow
   */
  export type MarketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market findFirst
   */
  export type MarketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findFirstOrThrow
   */
  export type MarketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Market to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market findMany
   */
  export type MarketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketOrderByWithRelationInput | MarketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketScalarFieldEnum | MarketScalarFieldEnum[]
  }

  /**
   * Market create
   */
  export type MarketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to create a Market.
     */
    data: XOR<MarketCreateInput, MarketUncheckedCreateInput>
  }

  /**
   * Market createMany
   */
  export type MarketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
  }

  /**
   * Market createManyAndReturn
   */
  export type MarketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketCreateManyInput | MarketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market update
   */
  export type MarketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The data needed to update a Market.
     */
    data: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
    /**
     * Choose, which Market to update.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market updateMany
   */
  export type MarketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Market updateManyAndReturn
   */
  export type MarketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Market upsert
   */
  export type MarketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * The filter to search for the Market to update in case it exists.
     */
    where: MarketWhereUniqueInput
    /**
     * In case the Market found by the `where` argument doesn't exist, create a new Market with this data.
     */
    create: XOR<MarketCreateInput, MarketUncheckedCreateInput>
    /**
     * In case the Market was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketUpdateInput, MarketUncheckedUpdateInput>
  }

  /**
   * Market delete
   */
  export type MarketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
    /**
     * Filter which Market to delete.
     */
    where: MarketWhereUniqueInput
  }

  /**
   * Market deleteMany
   */
  export type MarketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Market.outcomes
   */
  export type Market$outcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    cursor?: OutcomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Market.trades
   */
  export type Market$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Market without action
   */
  export type MarketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Market
     */
    select?: MarketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Market
     */
    omit?: MarketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketInclude<ExtArgs> | null
  }


  /**
   * Model Outcome
   */

  export type AggregateOutcome = {
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  export type OutcomeAvgAggregateOutputType = {
    currentOdds: number | null
    liquidityDepth: number | null
  }

  export type OutcomeSumAggregateOutputType = {
    currentOdds: number | null
    liquidityDepth: number | null
  }

  export type OutcomeMinAggregateOutputType = {
    id: string | null
    marketId: string | null
    label: string | null
    externalId: string | null
    currentOdds: number | null
    liquidityDepth: number | null
    liquidityLevels: string | null
    lastUpdated: Date | null
    canonicalBetId: string | null
  }

  export type OutcomeMaxAggregateOutputType = {
    id: string | null
    marketId: string | null
    label: string | null
    externalId: string | null
    currentOdds: number | null
    liquidityDepth: number | null
    liquidityLevels: string | null
    lastUpdated: Date | null
    canonicalBetId: string | null
  }

  export type OutcomeCountAggregateOutputType = {
    id: number
    marketId: number
    label: number
    externalId: number
    currentOdds: number
    liquidityDepth: number
    liquidityLevels: number
    lastUpdated: number
    canonicalBetId: number
    _all: number
  }


  export type OutcomeAvgAggregateInputType = {
    currentOdds?: true
    liquidityDepth?: true
  }

  export type OutcomeSumAggregateInputType = {
    currentOdds?: true
    liquidityDepth?: true
  }

  export type OutcomeMinAggregateInputType = {
    id?: true
    marketId?: true
    label?: true
    externalId?: true
    currentOdds?: true
    liquidityDepth?: true
    liquidityLevels?: true
    lastUpdated?: true
    canonicalBetId?: true
  }

  export type OutcomeMaxAggregateInputType = {
    id?: true
    marketId?: true
    label?: true
    externalId?: true
    currentOdds?: true
    liquidityDepth?: true
    liquidityLevels?: true
    lastUpdated?: true
    canonicalBetId?: true
  }

  export type OutcomeCountAggregateInputType = {
    id?: true
    marketId?: true
    label?: true
    externalId?: true
    currentOdds?: true
    liquidityDepth?: true
    liquidityLevels?: true
    lastUpdated?: true
    canonicalBetId?: true
    _all?: true
  }

  export type OutcomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outcome to aggregate.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outcomes
    **/
    _count?: true | OutcomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutcomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutcomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutcomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutcomeMaxAggregateInputType
  }

  export type GetOutcomeAggregateType<T extends OutcomeAggregateArgs> = {
        [P in keyof T & keyof AggregateOutcome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutcome[P]>
      : GetScalarType<T[P], AggregateOutcome[P]>
  }




  export type OutcomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithAggregationInput | OutcomeOrderByWithAggregationInput[]
    by: OutcomeScalarFieldEnum[] | OutcomeScalarFieldEnum
    having?: OutcomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutcomeCountAggregateInputType | true
    _avg?: OutcomeAvgAggregateInputType
    _sum?: OutcomeSumAggregateInputType
    _min?: OutcomeMinAggregateInputType
    _max?: OutcomeMaxAggregateInputType
  }

  export type OutcomeGroupByOutputType = {
    id: string
    marketId: string
    label: string
    externalId: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels: string | null
    lastUpdated: Date
    canonicalBetId: string | null
    _count: OutcomeCountAggregateOutputType | null
    _avg: OutcomeAvgAggregateOutputType | null
    _sum: OutcomeSumAggregateOutputType | null
    _min: OutcomeMinAggregateOutputType | null
    _max: OutcomeMaxAggregateOutputType | null
  }

  type GetOutcomeGroupByPayload<T extends OutcomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutcomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutcomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
            : GetScalarType<T[P], OutcomeGroupByOutputType[P]>
        }
      >
    >


  export type OutcomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    label?: boolean
    externalId?: boolean
    currentOdds?: boolean
    liquidityDepth?: boolean
    liquidityLevels?: boolean
    lastUpdated?: boolean
    canonicalBetId?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    canonicalBet?: boolean | Outcome$canonicalBetArgs<ExtArgs>
    trades?: boolean | Outcome$tradesArgs<ExtArgs>
    riskPositions?: boolean | Outcome$riskPositionsArgs<ExtArgs>
    _count?: boolean | OutcomeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    label?: boolean
    externalId?: boolean
    currentOdds?: boolean
    liquidityDepth?: boolean
    liquidityLevels?: boolean
    lastUpdated?: boolean
    canonicalBetId?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    canonicalBet?: boolean | Outcome$canonicalBetArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketId?: boolean
    label?: boolean
    externalId?: boolean
    currentOdds?: boolean
    liquidityDepth?: boolean
    liquidityLevels?: boolean
    lastUpdated?: boolean
    canonicalBetId?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    canonicalBet?: boolean | Outcome$canonicalBetArgs<ExtArgs>
  }, ExtArgs["result"]["outcome"]>

  export type OutcomeSelectScalar = {
    id?: boolean
    marketId?: boolean
    label?: boolean
    externalId?: boolean
    currentOdds?: boolean
    liquidityDepth?: boolean
    liquidityLevels?: boolean
    lastUpdated?: boolean
    canonicalBetId?: boolean
  }

  export type OutcomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketId" | "label" | "externalId" | "currentOdds" | "liquidityDepth" | "liquidityLevels" | "lastUpdated" | "canonicalBetId", ExtArgs["result"]["outcome"]>
  export type OutcomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    canonicalBet?: boolean | Outcome$canonicalBetArgs<ExtArgs>
    trades?: boolean | Outcome$tradesArgs<ExtArgs>
    riskPositions?: boolean | Outcome$riskPositionsArgs<ExtArgs>
    _count?: boolean | OutcomeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OutcomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    canonicalBet?: boolean | Outcome$canonicalBetArgs<ExtArgs>
  }
  export type OutcomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    canonicalBet?: boolean | Outcome$canonicalBetArgs<ExtArgs>
  }

  export type $OutcomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outcome"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
      canonicalBet: Prisma.$CanonicalBetPayload<ExtArgs> | null
      trades: Prisma.$TradePayload<ExtArgs>[]
      riskPositions: Prisma.$RiskPositionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketId: string
      label: string
      externalId: string | null
      currentOdds: number
      liquidityDepth: number
      liquidityLevels: string | null
      lastUpdated: Date
      canonicalBetId: string | null
    }, ExtArgs["result"]["outcome"]>
    composites: {}
  }

  type OutcomeGetPayload<S extends boolean | null | undefined | OutcomeDefaultArgs> = $Result.GetResult<Prisma.$OutcomePayload, S>

  type OutcomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutcomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutcomeCountAggregateInputType | true
    }

  export interface OutcomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outcome'], meta: { name: 'Outcome' } }
    /**
     * Find zero or one Outcome that matches the filter.
     * @param {OutcomeFindUniqueArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutcomeFindUniqueArgs>(args: SelectSubset<T, OutcomeFindUniqueArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outcome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutcomeFindUniqueOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutcomeFindUniqueOrThrowArgs>(args: SelectSubset<T, OutcomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindFirstArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutcomeFindFirstArgs>(args?: SelectSubset<T, OutcomeFindFirstArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outcome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindFirstOrThrowArgs} args - Arguments to find a Outcome
     * @example
     * // Get one Outcome
     * const outcome = await prisma.outcome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutcomeFindFirstOrThrowArgs>(args?: SelectSubset<T, OutcomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outcomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outcomes
     * const outcomes = await prisma.outcome.findMany()
     * 
     * // Get first 10 Outcomes
     * const outcomes = await prisma.outcome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outcomeWithIdOnly = await prisma.outcome.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutcomeFindManyArgs>(args?: SelectSubset<T, OutcomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outcome.
     * @param {OutcomeCreateArgs} args - Arguments to create a Outcome.
     * @example
     * // Create one Outcome
     * const Outcome = await prisma.outcome.create({
     *   data: {
     *     // ... data to create a Outcome
     *   }
     * })
     * 
     */
    create<T extends OutcomeCreateArgs>(args: SelectSubset<T, OutcomeCreateArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outcomes.
     * @param {OutcomeCreateManyArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutcomeCreateManyArgs>(args?: SelectSubset<T, OutcomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Outcomes and returns the data saved in the database.
     * @param {OutcomeCreateManyAndReturnArgs} args - Arguments to create many Outcomes.
     * @example
     * // Create many Outcomes
     * const outcome = await prisma.outcome.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Outcomes and only return the `id`
     * const outcomeWithIdOnly = await prisma.outcome.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutcomeCreateManyAndReturnArgs>(args?: SelectSubset<T, OutcomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Outcome.
     * @param {OutcomeDeleteArgs} args - Arguments to delete one Outcome.
     * @example
     * // Delete one Outcome
     * const Outcome = await prisma.outcome.delete({
     *   where: {
     *     // ... filter to delete one Outcome
     *   }
     * })
     * 
     */
    delete<T extends OutcomeDeleteArgs>(args: SelectSubset<T, OutcomeDeleteArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outcome.
     * @param {OutcomeUpdateArgs} args - Arguments to update one Outcome.
     * @example
     * // Update one Outcome
     * const outcome = await prisma.outcome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutcomeUpdateArgs>(args: SelectSubset<T, OutcomeUpdateArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outcomes.
     * @param {OutcomeDeleteManyArgs} args - Arguments to filter Outcomes to delete.
     * @example
     * // Delete a few Outcomes
     * const { count } = await prisma.outcome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutcomeDeleteManyArgs>(args?: SelectSubset<T, OutcomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutcomeUpdateManyArgs>(args: SelectSubset<T, OutcomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outcomes and returns the data updated in the database.
     * @param {OutcomeUpdateManyAndReturnArgs} args - Arguments to update many Outcomes.
     * @example
     * // Update many Outcomes
     * const outcome = await prisma.outcome.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Outcomes and only return the `id`
     * const outcomeWithIdOnly = await prisma.outcome.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutcomeUpdateManyAndReturnArgs>(args: SelectSubset<T, OutcomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Outcome.
     * @param {OutcomeUpsertArgs} args - Arguments to update or create a Outcome.
     * @example
     * // Update or create a Outcome
     * const outcome = await prisma.outcome.upsert({
     *   create: {
     *     // ... data to create a Outcome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outcome we want to update
     *   }
     * })
     */
    upsert<T extends OutcomeUpsertArgs>(args: SelectSubset<T, OutcomeUpsertArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeCountArgs} args - Arguments to filter Outcomes to count.
     * @example
     * // Count the number of Outcomes
     * const count = await prisma.outcome.count({
     *   where: {
     *     // ... the filter for the Outcomes we want to count
     *   }
     * })
    **/
    count<T extends OutcomeCountArgs>(
      args?: Subset<T, OutcomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutcomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutcomeAggregateArgs>(args: Subset<T, OutcomeAggregateArgs>): Prisma.PrismaPromise<GetOutcomeAggregateType<T>>

    /**
     * Group by Outcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutcomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutcomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutcomeGroupByArgs['orderBy'] }
        : { orderBy?: OutcomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutcomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutcomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outcome model
   */
  readonly fields: OutcomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outcome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutcomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    canonicalBet<T extends Outcome$canonicalBetArgs<ExtArgs> = {}>(args?: Subset<T, Outcome$canonicalBetArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trades<T extends Outcome$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Outcome$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    riskPositions<T extends Outcome$riskPositionsArgs<ExtArgs> = {}>(args?: Subset<T, Outcome$riskPositionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outcome model
   */
  interface OutcomeFieldRefs {
    readonly id: FieldRef<"Outcome", 'String'>
    readonly marketId: FieldRef<"Outcome", 'String'>
    readonly label: FieldRef<"Outcome", 'String'>
    readonly externalId: FieldRef<"Outcome", 'String'>
    readonly currentOdds: FieldRef<"Outcome", 'Float'>
    readonly liquidityDepth: FieldRef<"Outcome", 'Float'>
    readonly liquidityLevels: FieldRef<"Outcome", 'String'>
    readonly lastUpdated: FieldRef<"Outcome", 'DateTime'>
    readonly canonicalBetId: FieldRef<"Outcome", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Outcome findUnique
   */
  export type OutcomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome findUniqueOrThrow
   */
  export type OutcomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome findFirst
   */
  export type OutcomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome findFirstOrThrow
   */
  export type OutcomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcome to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome findMany
   */
  export type OutcomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter, which Outcomes to fetch.
     */
    where?: OutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outcomes to fetch.
     */
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outcomes.
     */
    cursor?: OutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outcomes.
     */
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * Outcome create
   */
  export type OutcomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Outcome.
     */
    data: XOR<OutcomeCreateInput, OutcomeUncheckedCreateInput>
  }

  /**
   * Outcome createMany
   */
  export type OutcomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outcomes.
     */
    data: OutcomeCreateManyInput | OutcomeCreateManyInput[]
  }

  /**
   * Outcome createManyAndReturn
   */
  export type OutcomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * The data used to create many Outcomes.
     */
    data: OutcomeCreateManyInput | OutcomeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outcome update
   */
  export type OutcomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Outcome.
     */
    data: XOR<OutcomeUpdateInput, OutcomeUncheckedUpdateInput>
    /**
     * Choose, which Outcome to update.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome updateMany
   */
  export type OutcomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outcomes.
     */
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyInput>
    /**
     * Filter which Outcomes to update
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to update.
     */
    limit?: number
  }

  /**
   * Outcome updateManyAndReturn
   */
  export type OutcomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * The data used to update Outcomes.
     */
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyInput>
    /**
     * Filter which Outcomes to update
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Outcome upsert
   */
  export type OutcomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Outcome to update in case it exists.
     */
    where: OutcomeWhereUniqueInput
    /**
     * In case the Outcome found by the `where` argument doesn't exist, create a new Outcome with this data.
     */
    create: XOR<OutcomeCreateInput, OutcomeUncheckedCreateInput>
    /**
     * In case the Outcome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutcomeUpdateInput, OutcomeUncheckedUpdateInput>
  }

  /**
   * Outcome delete
   */
  export type OutcomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    /**
     * Filter which Outcome to delete.
     */
    where: OutcomeWhereUniqueInput
  }

  /**
   * Outcome deleteMany
   */
  export type OutcomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outcomes to delete
     */
    where?: OutcomeWhereInput
    /**
     * Limit how many Outcomes to delete.
     */
    limit?: number
  }

  /**
   * Outcome.canonicalBet
   */
  export type Outcome$canonicalBetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    where?: CanonicalBetWhereInput
  }

  /**
   * Outcome.trades
   */
  export type Outcome$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Outcome.riskPositions
   */
  export type Outcome$riskPositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    where?: RiskPositionWhereInput
    orderBy?: RiskPositionOrderByWithRelationInput | RiskPositionOrderByWithRelationInput[]
    cursor?: RiskPositionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskPositionScalarFieldEnum | RiskPositionScalarFieldEnum[]
  }

  /**
   * Outcome without action
   */
  export type OutcomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
  }


  /**
   * Model CanonicalBet
   */

  export type AggregateCanonicalBet = {
    _count: CanonicalBetCountAggregateOutputType | null
    _avg: CanonicalBetAvgAggregateOutputType | null
    _sum: CanonicalBetSumAggregateOutputType | null
    _min: CanonicalBetMinAggregateOutputType | null
    _max: CanonicalBetMaxAggregateOutputType | null
  }

  export type CanonicalBetAvgAggregateOutputType = {
    line: number | null
  }

  export type CanonicalBetSumAggregateOutputType = {
    line: number | null
  }

  export type CanonicalBetMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    key: string | null
    betType: string | null
    side: string | null
    line: number | null
    createdAt: Date | null
  }

  export type CanonicalBetMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    key: string | null
    betType: string | null
    side: string | null
    line: number | null
    createdAt: Date | null
  }

  export type CanonicalBetCountAggregateOutputType = {
    id: number
    eventId: number
    key: number
    betType: number
    side: number
    line: number
    createdAt: number
    _all: number
  }


  export type CanonicalBetAvgAggregateInputType = {
    line?: true
  }

  export type CanonicalBetSumAggregateInputType = {
    line?: true
  }

  export type CanonicalBetMinAggregateInputType = {
    id?: true
    eventId?: true
    key?: true
    betType?: true
    side?: true
    line?: true
    createdAt?: true
  }

  export type CanonicalBetMaxAggregateInputType = {
    id?: true
    eventId?: true
    key?: true
    betType?: true
    side?: true
    line?: true
    createdAt?: true
  }

  export type CanonicalBetCountAggregateInputType = {
    id?: true
    eventId?: true
    key?: true
    betType?: true
    side?: true
    line?: true
    createdAt?: true
    _all?: true
  }

  export type CanonicalBetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanonicalBet to aggregate.
     */
    where?: CanonicalBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanonicalBets to fetch.
     */
    orderBy?: CanonicalBetOrderByWithRelationInput | CanonicalBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CanonicalBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanonicalBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanonicalBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CanonicalBets
    **/
    _count?: true | CanonicalBetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CanonicalBetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CanonicalBetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CanonicalBetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CanonicalBetMaxAggregateInputType
  }

  export type GetCanonicalBetAggregateType<T extends CanonicalBetAggregateArgs> = {
        [P in keyof T & keyof AggregateCanonicalBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCanonicalBet[P]>
      : GetScalarType<T[P], AggregateCanonicalBet[P]>
  }




  export type CanonicalBetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CanonicalBetWhereInput
    orderBy?: CanonicalBetOrderByWithAggregationInput | CanonicalBetOrderByWithAggregationInput[]
    by: CanonicalBetScalarFieldEnum[] | CanonicalBetScalarFieldEnum
    having?: CanonicalBetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CanonicalBetCountAggregateInputType | true
    _avg?: CanonicalBetAvgAggregateInputType
    _sum?: CanonicalBetSumAggregateInputType
    _min?: CanonicalBetMinAggregateInputType
    _max?: CanonicalBetMaxAggregateInputType
  }

  export type CanonicalBetGroupByOutputType = {
    id: string
    eventId: string
    key: string
    betType: string
    side: string
    line: number | null
    createdAt: Date
    _count: CanonicalBetCountAggregateOutputType | null
    _avg: CanonicalBetAvgAggregateOutputType | null
    _sum: CanonicalBetSumAggregateOutputType | null
    _min: CanonicalBetMinAggregateOutputType | null
    _max: CanonicalBetMaxAggregateOutputType | null
  }

  type GetCanonicalBetGroupByPayload<T extends CanonicalBetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CanonicalBetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CanonicalBetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CanonicalBetGroupByOutputType[P]>
            : GetScalarType<T[P], CanonicalBetGroupByOutputType[P]>
        }
      >
    >


  export type CanonicalBetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    key?: boolean
    betType?: boolean
    side?: boolean
    line?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    outcomes?: boolean | CanonicalBet$outcomesArgs<ExtArgs>
    _count?: boolean | CanonicalBetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canonicalBet"]>

  export type CanonicalBetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    key?: boolean
    betType?: boolean
    side?: boolean
    line?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canonicalBet"]>

  export type CanonicalBetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    key?: boolean
    betType?: boolean
    side?: boolean
    line?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["canonicalBet"]>

  export type CanonicalBetSelectScalar = {
    id?: boolean
    eventId?: boolean
    key?: boolean
    betType?: boolean
    side?: boolean
    line?: boolean
    createdAt?: boolean
  }

  export type CanonicalBetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "key" | "betType" | "side" | "line" | "createdAt", ExtArgs["result"]["canonicalBet"]>
  export type CanonicalBetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    outcomes?: boolean | CanonicalBet$outcomesArgs<ExtArgs>
    _count?: boolean | CanonicalBetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CanonicalBetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type CanonicalBetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $CanonicalBetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CanonicalBet"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      outcomes: Prisma.$OutcomePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      key: string
      betType: string
      side: string
      line: number | null
      createdAt: Date
    }, ExtArgs["result"]["canonicalBet"]>
    composites: {}
  }

  type CanonicalBetGetPayload<S extends boolean | null | undefined | CanonicalBetDefaultArgs> = $Result.GetResult<Prisma.$CanonicalBetPayload, S>

  type CanonicalBetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CanonicalBetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CanonicalBetCountAggregateInputType | true
    }

  export interface CanonicalBetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CanonicalBet'], meta: { name: 'CanonicalBet' } }
    /**
     * Find zero or one CanonicalBet that matches the filter.
     * @param {CanonicalBetFindUniqueArgs} args - Arguments to find a CanonicalBet
     * @example
     * // Get one CanonicalBet
     * const canonicalBet = await prisma.canonicalBet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CanonicalBetFindUniqueArgs>(args: SelectSubset<T, CanonicalBetFindUniqueArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CanonicalBet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CanonicalBetFindUniqueOrThrowArgs} args - Arguments to find a CanonicalBet
     * @example
     * // Get one CanonicalBet
     * const canonicalBet = await prisma.canonicalBet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CanonicalBetFindUniqueOrThrowArgs>(args: SelectSubset<T, CanonicalBetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanonicalBet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetFindFirstArgs} args - Arguments to find a CanonicalBet
     * @example
     * // Get one CanonicalBet
     * const canonicalBet = await prisma.canonicalBet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CanonicalBetFindFirstArgs>(args?: SelectSubset<T, CanonicalBetFindFirstArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CanonicalBet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetFindFirstOrThrowArgs} args - Arguments to find a CanonicalBet
     * @example
     * // Get one CanonicalBet
     * const canonicalBet = await prisma.canonicalBet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CanonicalBetFindFirstOrThrowArgs>(args?: SelectSubset<T, CanonicalBetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CanonicalBets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CanonicalBets
     * const canonicalBets = await prisma.canonicalBet.findMany()
     * 
     * // Get first 10 CanonicalBets
     * const canonicalBets = await prisma.canonicalBet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const canonicalBetWithIdOnly = await prisma.canonicalBet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CanonicalBetFindManyArgs>(args?: SelectSubset<T, CanonicalBetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CanonicalBet.
     * @param {CanonicalBetCreateArgs} args - Arguments to create a CanonicalBet.
     * @example
     * // Create one CanonicalBet
     * const CanonicalBet = await prisma.canonicalBet.create({
     *   data: {
     *     // ... data to create a CanonicalBet
     *   }
     * })
     * 
     */
    create<T extends CanonicalBetCreateArgs>(args: SelectSubset<T, CanonicalBetCreateArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CanonicalBets.
     * @param {CanonicalBetCreateManyArgs} args - Arguments to create many CanonicalBets.
     * @example
     * // Create many CanonicalBets
     * const canonicalBet = await prisma.canonicalBet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CanonicalBetCreateManyArgs>(args?: SelectSubset<T, CanonicalBetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CanonicalBets and returns the data saved in the database.
     * @param {CanonicalBetCreateManyAndReturnArgs} args - Arguments to create many CanonicalBets.
     * @example
     * // Create many CanonicalBets
     * const canonicalBet = await prisma.canonicalBet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CanonicalBets and only return the `id`
     * const canonicalBetWithIdOnly = await prisma.canonicalBet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CanonicalBetCreateManyAndReturnArgs>(args?: SelectSubset<T, CanonicalBetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CanonicalBet.
     * @param {CanonicalBetDeleteArgs} args - Arguments to delete one CanonicalBet.
     * @example
     * // Delete one CanonicalBet
     * const CanonicalBet = await prisma.canonicalBet.delete({
     *   where: {
     *     // ... filter to delete one CanonicalBet
     *   }
     * })
     * 
     */
    delete<T extends CanonicalBetDeleteArgs>(args: SelectSubset<T, CanonicalBetDeleteArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CanonicalBet.
     * @param {CanonicalBetUpdateArgs} args - Arguments to update one CanonicalBet.
     * @example
     * // Update one CanonicalBet
     * const canonicalBet = await prisma.canonicalBet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CanonicalBetUpdateArgs>(args: SelectSubset<T, CanonicalBetUpdateArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CanonicalBets.
     * @param {CanonicalBetDeleteManyArgs} args - Arguments to filter CanonicalBets to delete.
     * @example
     * // Delete a few CanonicalBets
     * const { count } = await prisma.canonicalBet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CanonicalBetDeleteManyArgs>(args?: SelectSubset<T, CanonicalBetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanonicalBets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CanonicalBets
     * const canonicalBet = await prisma.canonicalBet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CanonicalBetUpdateManyArgs>(args: SelectSubset<T, CanonicalBetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CanonicalBets and returns the data updated in the database.
     * @param {CanonicalBetUpdateManyAndReturnArgs} args - Arguments to update many CanonicalBets.
     * @example
     * // Update many CanonicalBets
     * const canonicalBet = await prisma.canonicalBet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CanonicalBets and only return the `id`
     * const canonicalBetWithIdOnly = await prisma.canonicalBet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CanonicalBetUpdateManyAndReturnArgs>(args: SelectSubset<T, CanonicalBetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CanonicalBet.
     * @param {CanonicalBetUpsertArgs} args - Arguments to update or create a CanonicalBet.
     * @example
     * // Update or create a CanonicalBet
     * const canonicalBet = await prisma.canonicalBet.upsert({
     *   create: {
     *     // ... data to create a CanonicalBet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CanonicalBet we want to update
     *   }
     * })
     */
    upsert<T extends CanonicalBetUpsertArgs>(args: SelectSubset<T, CanonicalBetUpsertArgs<ExtArgs>>): Prisma__CanonicalBetClient<$Result.GetResult<Prisma.$CanonicalBetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CanonicalBets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetCountArgs} args - Arguments to filter CanonicalBets to count.
     * @example
     * // Count the number of CanonicalBets
     * const count = await prisma.canonicalBet.count({
     *   where: {
     *     // ... the filter for the CanonicalBets we want to count
     *   }
     * })
    **/
    count<T extends CanonicalBetCountArgs>(
      args?: Subset<T, CanonicalBetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CanonicalBetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CanonicalBet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CanonicalBetAggregateArgs>(args: Subset<T, CanonicalBetAggregateArgs>): Prisma.PrismaPromise<GetCanonicalBetAggregateType<T>>

    /**
     * Group by CanonicalBet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CanonicalBetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CanonicalBetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CanonicalBetGroupByArgs['orderBy'] }
        : { orderBy?: CanonicalBetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CanonicalBetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanonicalBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CanonicalBet model
   */
  readonly fields: CanonicalBetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CanonicalBet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CanonicalBetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outcomes<T extends CanonicalBet$outcomesArgs<ExtArgs> = {}>(args?: Subset<T, CanonicalBet$outcomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CanonicalBet model
   */
  interface CanonicalBetFieldRefs {
    readonly id: FieldRef<"CanonicalBet", 'String'>
    readonly eventId: FieldRef<"CanonicalBet", 'String'>
    readonly key: FieldRef<"CanonicalBet", 'String'>
    readonly betType: FieldRef<"CanonicalBet", 'String'>
    readonly side: FieldRef<"CanonicalBet", 'String'>
    readonly line: FieldRef<"CanonicalBet", 'Float'>
    readonly createdAt: FieldRef<"CanonicalBet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CanonicalBet findUnique
   */
  export type CanonicalBetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * Filter, which CanonicalBet to fetch.
     */
    where: CanonicalBetWhereUniqueInput
  }

  /**
   * CanonicalBet findUniqueOrThrow
   */
  export type CanonicalBetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * Filter, which CanonicalBet to fetch.
     */
    where: CanonicalBetWhereUniqueInput
  }

  /**
   * CanonicalBet findFirst
   */
  export type CanonicalBetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * Filter, which CanonicalBet to fetch.
     */
    where?: CanonicalBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanonicalBets to fetch.
     */
    orderBy?: CanonicalBetOrderByWithRelationInput | CanonicalBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanonicalBets.
     */
    cursor?: CanonicalBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanonicalBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanonicalBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanonicalBets.
     */
    distinct?: CanonicalBetScalarFieldEnum | CanonicalBetScalarFieldEnum[]
  }

  /**
   * CanonicalBet findFirstOrThrow
   */
  export type CanonicalBetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * Filter, which CanonicalBet to fetch.
     */
    where?: CanonicalBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanonicalBets to fetch.
     */
    orderBy?: CanonicalBetOrderByWithRelationInput | CanonicalBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CanonicalBets.
     */
    cursor?: CanonicalBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanonicalBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanonicalBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanonicalBets.
     */
    distinct?: CanonicalBetScalarFieldEnum | CanonicalBetScalarFieldEnum[]
  }

  /**
   * CanonicalBet findMany
   */
  export type CanonicalBetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * Filter, which CanonicalBets to fetch.
     */
    where?: CanonicalBetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CanonicalBets to fetch.
     */
    orderBy?: CanonicalBetOrderByWithRelationInput | CanonicalBetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CanonicalBets.
     */
    cursor?: CanonicalBetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CanonicalBets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CanonicalBets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CanonicalBets.
     */
    distinct?: CanonicalBetScalarFieldEnum | CanonicalBetScalarFieldEnum[]
  }

  /**
   * CanonicalBet create
   */
  export type CanonicalBetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * The data needed to create a CanonicalBet.
     */
    data: XOR<CanonicalBetCreateInput, CanonicalBetUncheckedCreateInput>
  }

  /**
   * CanonicalBet createMany
   */
  export type CanonicalBetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CanonicalBets.
     */
    data: CanonicalBetCreateManyInput | CanonicalBetCreateManyInput[]
  }

  /**
   * CanonicalBet createManyAndReturn
   */
  export type CanonicalBetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * The data used to create many CanonicalBets.
     */
    data: CanonicalBetCreateManyInput | CanonicalBetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CanonicalBet update
   */
  export type CanonicalBetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * The data needed to update a CanonicalBet.
     */
    data: XOR<CanonicalBetUpdateInput, CanonicalBetUncheckedUpdateInput>
    /**
     * Choose, which CanonicalBet to update.
     */
    where: CanonicalBetWhereUniqueInput
  }

  /**
   * CanonicalBet updateMany
   */
  export type CanonicalBetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CanonicalBets.
     */
    data: XOR<CanonicalBetUpdateManyMutationInput, CanonicalBetUncheckedUpdateManyInput>
    /**
     * Filter which CanonicalBets to update
     */
    where?: CanonicalBetWhereInput
    /**
     * Limit how many CanonicalBets to update.
     */
    limit?: number
  }

  /**
   * CanonicalBet updateManyAndReturn
   */
  export type CanonicalBetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * The data used to update CanonicalBets.
     */
    data: XOR<CanonicalBetUpdateManyMutationInput, CanonicalBetUncheckedUpdateManyInput>
    /**
     * Filter which CanonicalBets to update
     */
    where?: CanonicalBetWhereInput
    /**
     * Limit how many CanonicalBets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CanonicalBet upsert
   */
  export type CanonicalBetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * The filter to search for the CanonicalBet to update in case it exists.
     */
    where: CanonicalBetWhereUniqueInput
    /**
     * In case the CanonicalBet found by the `where` argument doesn't exist, create a new CanonicalBet with this data.
     */
    create: XOR<CanonicalBetCreateInput, CanonicalBetUncheckedCreateInput>
    /**
     * In case the CanonicalBet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CanonicalBetUpdateInput, CanonicalBetUncheckedUpdateInput>
  }

  /**
   * CanonicalBet delete
   */
  export type CanonicalBetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
    /**
     * Filter which CanonicalBet to delete.
     */
    where: CanonicalBetWhereUniqueInput
  }

  /**
   * CanonicalBet deleteMany
   */
  export type CanonicalBetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CanonicalBets to delete
     */
    where?: CanonicalBetWhereInput
    /**
     * Limit how many CanonicalBets to delete.
     */
    limit?: number
  }

  /**
   * CanonicalBet.outcomes
   */
  export type CanonicalBet$outcomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    where?: OutcomeWhereInput
    orderBy?: OutcomeOrderByWithRelationInput | OutcomeOrderByWithRelationInput[]
    cursor?: OutcomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutcomeScalarFieldEnum | OutcomeScalarFieldEnum[]
  }

  /**
   * CanonicalBet without action
   */
  export type CanonicalBetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CanonicalBet
     */
    select?: CanonicalBetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CanonicalBet
     */
    omit?: CanonicalBetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CanonicalBetInclude<ExtArgs> | null
  }


  /**
   * Model TeamAlias
   */

  export type AggregateTeamAlias = {
    _count: TeamAliasCountAggregateOutputType | null
    _min: TeamAliasMinAggregateOutputType | null
    _max: TeamAliasMaxAggregateOutputType | null
  }

  export type TeamAliasMinAggregateOutputType = {
    id: string | null
    canonical: string | null
    platform: string | null
    alias: string | null
    league: string | null
  }

  export type TeamAliasMaxAggregateOutputType = {
    id: string | null
    canonical: string | null
    platform: string | null
    alias: string | null
    league: string | null
  }

  export type TeamAliasCountAggregateOutputType = {
    id: number
    canonical: number
    platform: number
    alias: number
    league: number
    _all: number
  }


  export type TeamAliasMinAggregateInputType = {
    id?: true
    canonical?: true
    platform?: true
    alias?: true
    league?: true
  }

  export type TeamAliasMaxAggregateInputType = {
    id?: true
    canonical?: true
    platform?: true
    alias?: true
    league?: true
  }

  export type TeamAliasCountAggregateInputType = {
    id?: true
    canonical?: true
    platform?: true
    alias?: true
    league?: true
    _all?: true
  }

  export type TeamAliasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamAlias to aggregate.
     */
    where?: TeamAliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAliases to fetch.
     */
    orderBy?: TeamAliasOrderByWithRelationInput | TeamAliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamAliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamAliases
    **/
    _count?: true | TeamAliasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamAliasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamAliasMaxAggregateInputType
  }

  export type GetTeamAliasAggregateType<T extends TeamAliasAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamAlias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamAlias[P]>
      : GetScalarType<T[P], AggregateTeamAlias[P]>
  }




  export type TeamAliasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamAliasWhereInput
    orderBy?: TeamAliasOrderByWithAggregationInput | TeamAliasOrderByWithAggregationInput[]
    by: TeamAliasScalarFieldEnum[] | TeamAliasScalarFieldEnum
    having?: TeamAliasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamAliasCountAggregateInputType | true
    _min?: TeamAliasMinAggregateInputType
    _max?: TeamAliasMaxAggregateInputType
  }

  export type TeamAliasGroupByOutputType = {
    id: string
    canonical: string
    platform: string
    alias: string
    league: string
    _count: TeamAliasCountAggregateOutputType | null
    _min: TeamAliasMinAggregateOutputType | null
    _max: TeamAliasMaxAggregateOutputType | null
  }

  type GetTeamAliasGroupByPayload<T extends TeamAliasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamAliasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamAliasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamAliasGroupByOutputType[P]>
            : GetScalarType<T[P], TeamAliasGroupByOutputType[P]>
        }
      >
    >


  export type TeamAliasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canonical?: boolean
    platform?: boolean
    alias?: boolean
    league?: boolean
  }, ExtArgs["result"]["teamAlias"]>

  export type TeamAliasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canonical?: boolean
    platform?: boolean
    alias?: boolean
    league?: boolean
  }, ExtArgs["result"]["teamAlias"]>

  export type TeamAliasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    canonical?: boolean
    platform?: boolean
    alias?: boolean
    league?: boolean
  }, ExtArgs["result"]["teamAlias"]>

  export type TeamAliasSelectScalar = {
    id?: boolean
    canonical?: boolean
    platform?: boolean
    alias?: boolean
    league?: boolean
  }

  export type TeamAliasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "canonical" | "platform" | "alias" | "league", ExtArgs["result"]["teamAlias"]>

  export type $TeamAliasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamAlias"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      canonical: string
      platform: string
      alias: string
      league: string
    }, ExtArgs["result"]["teamAlias"]>
    composites: {}
  }

  type TeamAliasGetPayload<S extends boolean | null | undefined | TeamAliasDefaultArgs> = $Result.GetResult<Prisma.$TeamAliasPayload, S>

  type TeamAliasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamAliasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamAliasCountAggregateInputType | true
    }

  export interface TeamAliasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamAlias'], meta: { name: 'TeamAlias' } }
    /**
     * Find zero or one TeamAlias that matches the filter.
     * @param {TeamAliasFindUniqueArgs} args - Arguments to find a TeamAlias
     * @example
     * // Get one TeamAlias
     * const teamAlias = await prisma.teamAlias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamAliasFindUniqueArgs>(args: SelectSubset<T, TeamAliasFindUniqueArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamAlias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamAliasFindUniqueOrThrowArgs} args - Arguments to find a TeamAlias
     * @example
     * // Get one TeamAlias
     * const teamAlias = await prisma.teamAlias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamAliasFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamAliasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamAlias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasFindFirstArgs} args - Arguments to find a TeamAlias
     * @example
     * // Get one TeamAlias
     * const teamAlias = await prisma.teamAlias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamAliasFindFirstArgs>(args?: SelectSubset<T, TeamAliasFindFirstArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamAlias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasFindFirstOrThrowArgs} args - Arguments to find a TeamAlias
     * @example
     * // Get one TeamAlias
     * const teamAlias = await prisma.teamAlias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamAliasFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamAliasFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamAliases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamAliases
     * const teamAliases = await prisma.teamAlias.findMany()
     * 
     * // Get first 10 TeamAliases
     * const teamAliases = await prisma.teamAlias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamAliasWithIdOnly = await prisma.teamAlias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamAliasFindManyArgs>(args?: SelectSubset<T, TeamAliasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamAlias.
     * @param {TeamAliasCreateArgs} args - Arguments to create a TeamAlias.
     * @example
     * // Create one TeamAlias
     * const TeamAlias = await prisma.teamAlias.create({
     *   data: {
     *     // ... data to create a TeamAlias
     *   }
     * })
     * 
     */
    create<T extends TeamAliasCreateArgs>(args: SelectSubset<T, TeamAliasCreateArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamAliases.
     * @param {TeamAliasCreateManyArgs} args - Arguments to create many TeamAliases.
     * @example
     * // Create many TeamAliases
     * const teamAlias = await prisma.teamAlias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamAliasCreateManyArgs>(args?: SelectSubset<T, TeamAliasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamAliases and returns the data saved in the database.
     * @param {TeamAliasCreateManyAndReturnArgs} args - Arguments to create many TeamAliases.
     * @example
     * // Create many TeamAliases
     * const teamAlias = await prisma.teamAlias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamAliases and only return the `id`
     * const teamAliasWithIdOnly = await prisma.teamAlias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamAliasCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamAliasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamAlias.
     * @param {TeamAliasDeleteArgs} args - Arguments to delete one TeamAlias.
     * @example
     * // Delete one TeamAlias
     * const TeamAlias = await prisma.teamAlias.delete({
     *   where: {
     *     // ... filter to delete one TeamAlias
     *   }
     * })
     * 
     */
    delete<T extends TeamAliasDeleteArgs>(args: SelectSubset<T, TeamAliasDeleteArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamAlias.
     * @param {TeamAliasUpdateArgs} args - Arguments to update one TeamAlias.
     * @example
     * // Update one TeamAlias
     * const teamAlias = await prisma.teamAlias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamAliasUpdateArgs>(args: SelectSubset<T, TeamAliasUpdateArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamAliases.
     * @param {TeamAliasDeleteManyArgs} args - Arguments to filter TeamAliases to delete.
     * @example
     * // Delete a few TeamAliases
     * const { count } = await prisma.teamAlias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamAliasDeleteManyArgs>(args?: SelectSubset<T, TeamAliasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamAliases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamAliases
     * const teamAlias = await prisma.teamAlias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamAliasUpdateManyArgs>(args: SelectSubset<T, TeamAliasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamAliases and returns the data updated in the database.
     * @param {TeamAliasUpdateManyAndReturnArgs} args - Arguments to update many TeamAliases.
     * @example
     * // Update many TeamAliases
     * const teamAlias = await prisma.teamAlias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamAliases and only return the `id`
     * const teamAliasWithIdOnly = await prisma.teamAlias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamAliasUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamAliasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamAlias.
     * @param {TeamAliasUpsertArgs} args - Arguments to update or create a TeamAlias.
     * @example
     * // Update or create a TeamAlias
     * const teamAlias = await prisma.teamAlias.upsert({
     *   create: {
     *     // ... data to create a TeamAlias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamAlias we want to update
     *   }
     * })
     */
    upsert<T extends TeamAliasUpsertArgs>(args: SelectSubset<T, TeamAliasUpsertArgs<ExtArgs>>): Prisma__TeamAliasClient<$Result.GetResult<Prisma.$TeamAliasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamAliases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasCountArgs} args - Arguments to filter TeamAliases to count.
     * @example
     * // Count the number of TeamAliases
     * const count = await prisma.teamAlias.count({
     *   where: {
     *     // ... the filter for the TeamAliases we want to count
     *   }
     * })
    **/
    count<T extends TeamAliasCountArgs>(
      args?: Subset<T, TeamAliasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamAliasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamAlias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAliasAggregateArgs>(args: Subset<T, TeamAliasAggregateArgs>): Prisma.PrismaPromise<GetTeamAliasAggregateType<T>>

    /**
     * Group by TeamAlias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAliasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamAliasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamAliasGroupByArgs['orderBy'] }
        : { orderBy?: TeamAliasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamAliasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamAliasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamAlias model
   */
  readonly fields: TeamAliasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamAlias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamAliasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamAlias model
   */
  interface TeamAliasFieldRefs {
    readonly id: FieldRef<"TeamAlias", 'String'>
    readonly canonical: FieldRef<"TeamAlias", 'String'>
    readonly platform: FieldRef<"TeamAlias", 'String'>
    readonly alias: FieldRef<"TeamAlias", 'String'>
    readonly league: FieldRef<"TeamAlias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamAlias findUnique
   */
  export type TeamAliasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * Filter, which TeamAlias to fetch.
     */
    where: TeamAliasWhereUniqueInput
  }

  /**
   * TeamAlias findUniqueOrThrow
   */
  export type TeamAliasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * Filter, which TeamAlias to fetch.
     */
    where: TeamAliasWhereUniqueInput
  }

  /**
   * TeamAlias findFirst
   */
  export type TeamAliasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * Filter, which TeamAlias to fetch.
     */
    where?: TeamAliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAliases to fetch.
     */
    orderBy?: TeamAliasOrderByWithRelationInput | TeamAliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamAliases.
     */
    cursor?: TeamAliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamAliases.
     */
    distinct?: TeamAliasScalarFieldEnum | TeamAliasScalarFieldEnum[]
  }

  /**
   * TeamAlias findFirstOrThrow
   */
  export type TeamAliasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * Filter, which TeamAlias to fetch.
     */
    where?: TeamAliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAliases to fetch.
     */
    orderBy?: TeamAliasOrderByWithRelationInput | TeamAliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamAliases.
     */
    cursor?: TeamAliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamAliases.
     */
    distinct?: TeamAliasScalarFieldEnum | TeamAliasScalarFieldEnum[]
  }

  /**
   * TeamAlias findMany
   */
  export type TeamAliasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * Filter, which TeamAliases to fetch.
     */
    where?: TeamAliasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamAliases to fetch.
     */
    orderBy?: TeamAliasOrderByWithRelationInput | TeamAliasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamAliases.
     */
    cursor?: TeamAliasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamAliases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamAliases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamAliases.
     */
    distinct?: TeamAliasScalarFieldEnum | TeamAliasScalarFieldEnum[]
  }

  /**
   * TeamAlias create
   */
  export type TeamAliasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * The data needed to create a TeamAlias.
     */
    data: XOR<TeamAliasCreateInput, TeamAliasUncheckedCreateInput>
  }

  /**
   * TeamAlias createMany
   */
  export type TeamAliasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamAliases.
     */
    data: TeamAliasCreateManyInput | TeamAliasCreateManyInput[]
  }

  /**
   * TeamAlias createManyAndReturn
   */
  export type TeamAliasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * The data used to create many TeamAliases.
     */
    data: TeamAliasCreateManyInput | TeamAliasCreateManyInput[]
  }

  /**
   * TeamAlias update
   */
  export type TeamAliasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * The data needed to update a TeamAlias.
     */
    data: XOR<TeamAliasUpdateInput, TeamAliasUncheckedUpdateInput>
    /**
     * Choose, which TeamAlias to update.
     */
    where: TeamAliasWhereUniqueInput
  }

  /**
   * TeamAlias updateMany
   */
  export type TeamAliasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamAliases.
     */
    data: XOR<TeamAliasUpdateManyMutationInput, TeamAliasUncheckedUpdateManyInput>
    /**
     * Filter which TeamAliases to update
     */
    where?: TeamAliasWhereInput
    /**
     * Limit how many TeamAliases to update.
     */
    limit?: number
  }

  /**
   * TeamAlias updateManyAndReturn
   */
  export type TeamAliasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * The data used to update TeamAliases.
     */
    data: XOR<TeamAliasUpdateManyMutationInput, TeamAliasUncheckedUpdateManyInput>
    /**
     * Filter which TeamAliases to update
     */
    where?: TeamAliasWhereInput
    /**
     * Limit how many TeamAliases to update.
     */
    limit?: number
  }

  /**
   * TeamAlias upsert
   */
  export type TeamAliasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * The filter to search for the TeamAlias to update in case it exists.
     */
    where: TeamAliasWhereUniqueInput
    /**
     * In case the TeamAlias found by the `where` argument doesn't exist, create a new TeamAlias with this data.
     */
    create: XOR<TeamAliasCreateInput, TeamAliasUncheckedCreateInput>
    /**
     * In case the TeamAlias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamAliasUpdateInput, TeamAliasUncheckedUpdateInput>
  }

  /**
   * TeamAlias delete
   */
  export type TeamAliasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
    /**
     * Filter which TeamAlias to delete.
     */
    where: TeamAliasWhereUniqueInput
  }

  /**
   * TeamAlias deleteMany
   */
  export type TeamAliasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamAliases to delete
     */
    where?: TeamAliasWhereInput
    /**
     * Limit how many TeamAliases to delete.
     */
    limit?: number
  }

  /**
   * TeamAlias without action
   */
  export type TeamAliasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamAlias
     */
    select?: TeamAliasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamAlias
     */
    omit?: TeamAliasOmit<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    requestedSize: number | null
    executedSize: number | null
    requestedOdds: number | null
    fillOdds: number | null
  }

  export type TradeSumAggregateOutputType = {
    requestedSize: number | null
    executedSize: number | null
    requestedOdds: number | null
    fillOdds: number | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    marketId: string | null
    outcomeId: string | null
    side: string | null
    requestedSize: number | null
    executedSize: number | null
    requestedOdds: number | null
    fillOdds: number | null
    platform: string | null
    txHash: string | null
    status: string | null
    failureReason: string | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    marketId: string | null
    outcomeId: string | null
    side: string | null
    requestedSize: number | null
    executedSize: number | null
    requestedOdds: number | null
    fillOdds: number | null
    platform: string | null
    txHash: string | null
    status: string | null
    failureReason: string | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    createdAt: number
    marketId: number
    outcomeId: number
    side: number
    requestedSize: number
    executedSize: number
    requestedOdds: number
    fillOdds: number
    platform: number
    txHash: number
    status: number
    failureReason: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    requestedSize?: true
    executedSize?: true
    requestedOdds?: true
    fillOdds?: true
  }

  export type TradeSumAggregateInputType = {
    requestedSize?: true
    executedSize?: true
    requestedOdds?: true
    fillOdds?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    createdAt?: true
    marketId?: true
    outcomeId?: true
    side?: true
    requestedSize?: true
    executedSize?: true
    requestedOdds?: true
    fillOdds?: true
    platform?: true
    txHash?: true
    status?: true
    failureReason?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    marketId?: true
    outcomeId?: true
    side?: true
    requestedSize?: true
    executedSize?: true
    requestedOdds?: true
    fillOdds?: true
    platform?: true
    txHash?: true
    status?: true
    failureReason?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    createdAt?: true
    marketId?: true
    outcomeId?: true
    side?: true
    requestedSize?: true
    executedSize?: true
    requestedOdds?: true
    fillOdds?: true
    platform?: true
    txHash?: true
    status?: true
    failureReason?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    createdAt: Date
    marketId: string
    outcomeId: string
    side: string
    requestedSize: number
    executedSize: number | null
    requestedOdds: number
    fillOdds: number | null
    platform: string
    txHash: string | null
    status: string
    failureReason: string | null
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    marketId?: boolean
    outcomeId?: boolean
    side?: boolean
    requestedSize?: boolean
    executedSize?: boolean
    requestedOdds?: boolean
    fillOdds?: boolean
    platform?: boolean
    txHash?: boolean
    status?: boolean
    failureReason?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    outcome?: boolean | OutcomeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    marketId?: boolean
    outcomeId?: boolean
    side?: boolean
    requestedSize?: boolean
    executedSize?: boolean
    requestedOdds?: boolean
    fillOdds?: boolean
    platform?: boolean
    txHash?: boolean
    status?: boolean
    failureReason?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    outcome?: boolean | OutcomeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    marketId?: boolean
    outcomeId?: boolean
    side?: boolean
    requestedSize?: boolean
    executedSize?: boolean
    requestedOdds?: boolean
    fillOdds?: boolean
    platform?: boolean
    txHash?: boolean
    status?: boolean
    failureReason?: boolean
    market?: boolean | MarketDefaultArgs<ExtArgs>
    outcome?: boolean | OutcomeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    marketId?: boolean
    outcomeId?: boolean
    side?: boolean
    requestedSize?: boolean
    executedSize?: boolean
    requestedOdds?: boolean
    fillOdds?: boolean
    platform?: boolean
    txHash?: boolean
    status?: boolean
    failureReason?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "marketId" | "outcomeId" | "side" | "requestedSize" | "executedSize" | "requestedOdds" | "fillOdds" | "platform" | "txHash" | "status" | "failureReason", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    outcome?: boolean | OutcomeDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    outcome?: boolean | OutcomeDefaultArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    market?: boolean | MarketDefaultArgs<ExtArgs>
    outcome?: boolean | OutcomeDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      market: Prisma.$MarketPayload<ExtArgs>
      outcome: Prisma.$OutcomePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      marketId: string
      outcomeId: string
      side: string
      requestedSize: number
      executedSize: number | null
      requestedOdds: number
      fillOdds: number | null
      platform: string
      txHash: string | null
      status: string
      failureReason: string | null
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    market<T extends MarketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketDefaultArgs<ExtArgs>>): Prisma__MarketClient<$Result.GetResult<Prisma.$MarketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    outcome<T extends OutcomeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutcomeDefaultArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly createdAt: FieldRef<"Trade", 'DateTime'>
    readonly marketId: FieldRef<"Trade", 'String'>
    readonly outcomeId: FieldRef<"Trade", 'String'>
    readonly side: FieldRef<"Trade", 'String'>
    readonly requestedSize: FieldRef<"Trade", 'Float'>
    readonly executedSize: FieldRef<"Trade", 'Float'>
    readonly requestedOdds: FieldRef<"Trade", 'Float'>
    readonly fillOdds: FieldRef<"Trade", 'Float'>
    readonly platform: FieldRef<"Trade", 'String'>
    readonly txHash: FieldRef<"Trade", 'String'>
    readonly status: FieldRef<"Trade", 'String'>
    readonly failureReason: FieldRef<"Trade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model BotConfig
   */

  export type AggregateBotConfig = {
    _count: BotConfigCountAggregateOutputType | null
    _min: BotConfigMinAggregateOutputType | null
    _max: BotConfigMaxAggregateOutputType | null
  }

  export type BotConfigMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type BotConfigMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type BotConfigCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type BotConfigMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type BotConfigMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type BotConfigCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type BotConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotConfig to aggregate.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BotConfigs
    **/
    _count?: true | BotConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BotConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BotConfigMaxAggregateInputType
  }

  export type GetBotConfigAggregateType<T extends BotConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateBotConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBotConfig[P]>
      : GetScalarType<T[P], AggregateBotConfig[P]>
  }




  export type BotConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BotConfigWhereInput
    orderBy?: BotConfigOrderByWithAggregationInput | BotConfigOrderByWithAggregationInput[]
    by: BotConfigScalarFieldEnum[] | BotConfigScalarFieldEnum
    having?: BotConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BotConfigCountAggregateInputType | true
    _min?: BotConfigMinAggregateInputType
    _max?: BotConfigMaxAggregateInputType
  }

  export type BotConfigGroupByOutputType = {
    key: string
    value: string
    _count: BotConfigCountAggregateOutputType | null
    _min: BotConfigMinAggregateOutputType | null
    _max: BotConfigMaxAggregateOutputType | null
  }

  type GetBotConfigGroupByPayload<T extends BotConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BotConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BotConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BotConfigGroupByOutputType[P]>
            : GetScalarType<T[P], BotConfigGroupByOutputType[P]>
        }
      >
    >


  export type BotConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["botConfig"]>

  export type BotConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["botConfig"]>

  export type BotConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["botConfig"]>

  export type BotConfigSelectScalar = {
    key?: boolean
    value?: boolean
  }

  export type BotConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value", ExtArgs["result"]["botConfig"]>

  export type $BotConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BotConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["botConfig"]>
    composites: {}
  }

  type BotConfigGetPayload<S extends boolean | null | undefined | BotConfigDefaultArgs> = $Result.GetResult<Prisma.$BotConfigPayload, S>

  type BotConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BotConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BotConfigCountAggregateInputType | true
    }

  export interface BotConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BotConfig'], meta: { name: 'BotConfig' } }
    /**
     * Find zero or one BotConfig that matches the filter.
     * @param {BotConfigFindUniqueArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BotConfigFindUniqueArgs>(args: SelectSubset<T, BotConfigFindUniqueArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BotConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BotConfigFindUniqueOrThrowArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BotConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, BotConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BotConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigFindFirstArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BotConfigFindFirstArgs>(args?: SelectSubset<T, BotConfigFindFirstArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BotConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigFindFirstOrThrowArgs} args - Arguments to find a BotConfig
     * @example
     * // Get one BotConfig
     * const botConfig = await prisma.botConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BotConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, BotConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BotConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BotConfigs
     * const botConfigs = await prisma.botConfig.findMany()
     * 
     * // Get first 10 BotConfigs
     * const botConfigs = await prisma.botConfig.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const botConfigWithKeyOnly = await prisma.botConfig.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends BotConfigFindManyArgs>(args?: SelectSubset<T, BotConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BotConfig.
     * @param {BotConfigCreateArgs} args - Arguments to create a BotConfig.
     * @example
     * // Create one BotConfig
     * const BotConfig = await prisma.botConfig.create({
     *   data: {
     *     // ... data to create a BotConfig
     *   }
     * })
     * 
     */
    create<T extends BotConfigCreateArgs>(args: SelectSubset<T, BotConfigCreateArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BotConfigs.
     * @param {BotConfigCreateManyArgs} args - Arguments to create many BotConfigs.
     * @example
     * // Create many BotConfigs
     * const botConfig = await prisma.botConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BotConfigCreateManyArgs>(args?: SelectSubset<T, BotConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BotConfigs and returns the data saved in the database.
     * @param {BotConfigCreateManyAndReturnArgs} args - Arguments to create many BotConfigs.
     * @example
     * // Create many BotConfigs
     * const botConfig = await prisma.botConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BotConfigs and only return the `key`
     * const botConfigWithKeyOnly = await prisma.botConfig.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BotConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, BotConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BotConfig.
     * @param {BotConfigDeleteArgs} args - Arguments to delete one BotConfig.
     * @example
     * // Delete one BotConfig
     * const BotConfig = await prisma.botConfig.delete({
     *   where: {
     *     // ... filter to delete one BotConfig
     *   }
     * })
     * 
     */
    delete<T extends BotConfigDeleteArgs>(args: SelectSubset<T, BotConfigDeleteArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BotConfig.
     * @param {BotConfigUpdateArgs} args - Arguments to update one BotConfig.
     * @example
     * // Update one BotConfig
     * const botConfig = await prisma.botConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BotConfigUpdateArgs>(args: SelectSubset<T, BotConfigUpdateArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BotConfigs.
     * @param {BotConfigDeleteManyArgs} args - Arguments to filter BotConfigs to delete.
     * @example
     * // Delete a few BotConfigs
     * const { count } = await prisma.botConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BotConfigDeleteManyArgs>(args?: SelectSubset<T, BotConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BotConfigs
     * const botConfig = await prisma.botConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BotConfigUpdateManyArgs>(args: SelectSubset<T, BotConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BotConfigs and returns the data updated in the database.
     * @param {BotConfigUpdateManyAndReturnArgs} args - Arguments to update many BotConfigs.
     * @example
     * // Update many BotConfigs
     * const botConfig = await prisma.botConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BotConfigs and only return the `key`
     * const botConfigWithKeyOnly = await prisma.botConfig.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BotConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, BotConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BotConfig.
     * @param {BotConfigUpsertArgs} args - Arguments to update or create a BotConfig.
     * @example
     * // Update or create a BotConfig
     * const botConfig = await prisma.botConfig.upsert({
     *   create: {
     *     // ... data to create a BotConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BotConfig we want to update
     *   }
     * })
     */
    upsert<T extends BotConfigUpsertArgs>(args: SelectSubset<T, BotConfigUpsertArgs<ExtArgs>>): Prisma__BotConfigClient<$Result.GetResult<Prisma.$BotConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BotConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigCountArgs} args - Arguments to filter BotConfigs to count.
     * @example
     * // Count the number of BotConfigs
     * const count = await prisma.botConfig.count({
     *   where: {
     *     // ... the filter for the BotConfigs we want to count
     *   }
     * })
    **/
    count<T extends BotConfigCountArgs>(
      args?: Subset<T, BotConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BotConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BotConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BotConfigAggregateArgs>(args: Subset<T, BotConfigAggregateArgs>): Prisma.PrismaPromise<GetBotConfigAggregateType<T>>

    /**
     * Group by BotConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BotConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BotConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BotConfigGroupByArgs['orderBy'] }
        : { orderBy?: BotConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BotConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBotConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BotConfig model
   */
  readonly fields: BotConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BotConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BotConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BotConfig model
   */
  interface BotConfigFieldRefs {
    readonly key: FieldRef<"BotConfig", 'String'>
    readonly value: FieldRef<"BotConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BotConfig findUnique
   */
  export type BotConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig findUniqueOrThrow
   */
  export type BotConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig findFirst
   */
  export type BotConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotConfigs.
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotConfigs.
     */
    distinct?: BotConfigScalarFieldEnum | BotConfigScalarFieldEnum[]
  }

  /**
   * BotConfig findFirstOrThrow
   */
  export type BotConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * Filter, which BotConfig to fetch.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BotConfigs.
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotConfigs.
     */
    distinct?: BotConfigScalarFieldEnum | BotConfigScalarFieldEnum[]
  }

  /**
   * BotConfig findMany
   */
  export type BotConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * Filter, which BotConfigs to fetch.
     */
    where?: BotConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BotConfigs to fetch.
     */
    orderBy?: BotConfigOrderByWithRelationInput | BotConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BotConfigs.
     */
    cursor?: BotConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BotConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BotConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BotConfigs.
     */
    distinct?: BotConfigScalarFieldEnum | BotConfigScalarFieldEnum[]
  }

  /**
   * BotConfig create
   */
  export type BotConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a BotConfig.
     */
    data: XOR<BotConfigCreateInput, BotConfigUncheckedCreateInput>
  }

  /**
   * BotConfig createMany
   */
  export type BotConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BotConfigs.
     */
    data: BotConfigCreateManyInput | BotConfigCreateManyInput[]
  }

  /**
   * BotConfig createManyAndReturn
   */
  export type BotConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * The data used to create many BotConfigs.
     */
    data: BotConfigCreateManyInput | BotConfigCreateManyInput[]
  }

  /**
   * BotConfig update
   */
  export type BotConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a BotConfig.
     */
    data: XOR<BotConfigUpdateInput, BotConfigUncheckedUpdateInput>
    /**
     * Choose, which BotConfig to update.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig updateMany
   */
  export type BotConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BotConfigs.
     */
    data: XOR<BotConfigUpdateManyMutationInput, BotConfigUncheckedUpdateManyInput>
    /**
     * Filter which BotConfigs to update
     */
    where?: BotConfigWhereInput
    /**
     * Limit how many BotConfigs to update.
     */
    limit?: number
  }

  /**
   * BotConfig updateManyAndReturn
   */
  export type BotConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * The data used to update BotConfigs.
     */
    data: XOR<BotConfigUpdateManyMutationInput, BotConfigUncheckedUpdateManyInput>
    /**
     * Filter which BotConfigs to update
     */
    where?: BotConfigWhereInput
    /**
     * Limit how many BotConfigs to update.
     */
    limit?: number
  }

  /**
   * BotConfig upsert
   */
  export type BotConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the BotConfig to update in case it exists.
     */
    where: BotConfigWhereUniqueInput
    /**
     * In case the BotConfig found by the `where` argument doesn't exist, create a new BotConfig with this data.
     */
    create: XOR<BotConfigCreateInput, BotConfigUncheckedCreateInput>
    /**
     * In case the BotConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BotConfigUpdateInput, BotConfigUncheckedUpdateInput>
  }

  /**
   * BotConfig delete
   */
  export type BotConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
    /**
     * Filter which BotConfig to delete.
     */
    where: BotConfigWhereUniqueInput
  }

  /**
   * BotConfig deleteMany
   */
  export type BotConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BotConfigs to delete
     */
    where?: BotConfigWhereInput
    /**
     * Limit how many BotConfigs to delete.
     */
    limit?: number
  }

  /**
   * BotConfig without action
   */
  export type BotConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BotConfig
     */
    select?: BotConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BotConfig
     */
    omit?: BotConfigOmit<ExtArgs> | null
  }


  /**
   * Model PolymarketAccount
   */

  export type AggregatePolymarketAccount = {
    _count: PolymarketAccountCountAggregateOutputType | null
    _min: PolymarketAccountMinAggregateOutputType | null
    _max: PolymarketAccountMaxAggregateOutputType | null
  }

  export type PolymarketAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    secret: string | null
    passphrase: string | null
    privateKey: string | null
    funderAddress: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolymarketAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    secret: string | null
    passphrase: string | null
    privateKey: string | null
    funderAddress: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolymarketAccountCountAggregateOutputType = {
    id: number
    name: number
    apiKey: number
    secret: number
    passphrase: number
    privateKey: number
    funderAddress: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolymarketAccountMinAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    secret?: true
    passphrase?: true
    privateKey?: true
    funderAddress?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolymarketAccountMaxAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    secret?: true
    passphrase?: true
    privateKey?: true
    funderAddress?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolymarketAccountCountAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    secret?: true
    passphrase?: true
    privateKey?: true
    funderAddress?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolymarketAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolymarketAccount to aggregate.
     */
    where?: PolymarketAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolymarketAccounts to fetch.
     */
    orderBy?: PolymarketAccountOrderByWithRelationInput | PolymarketAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolymarketAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolymarketAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolymarketAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolymarketAccounts
    **/
    _count?: true | PolymarketAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolymarketAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolymarketAccountMaxAggregateInputType
  }

  export type GetPolymarketAccountAggregateType<T extends PolymarketAccountAggregateArgs> = {
        [P in keyof T & keyof AggregatePolymarketAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolymarketAccount[P]>
      : GetScalarType<T[P], AggregatePolymarketAccount[P]>
  }




  export type PolymarketAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolymarketAccountWhereInput
    orderBy?: PolymarketAccountOrderByWithAggregationInput | PolymarketAccountOrderByWithAggregationInput[]
    by: PolymarketAccountScalarFieldEnum[] | PolymarketAccountScalarFieldEnum
    having?: PolymarketAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolymarketAccountCountAggregateInputType | true
    _min?: PolymarketAccountMinAggregateInputType
    _max?: PolymarketAccountMaxAggregateInputType
  }

  export type PolymarketAccountGroupByOutputType = {
    id: string
    name: string
    apiKey: string
    secret: string
    passphrase: string
    privateKey: string
    funderAddress: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PolymarketAccountCountAggregateOutputType | null
    _min: PolymarketAccountMinAggregateOutputType | null
    _max: PolymarketAccountMaxAggregateOutputType | null
  }

  type GetPolymarketAccountGroupByPayload<T extends PolymarketAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolymarketAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolymarketAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolymarketAccountGroupByOutputType[P]>
            : GetScalarType<T[P], PolymarketAccountGroupByOutputType[P]>
        }
      >
    >


  export type PolymarketAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secret?: boolean
    passphrase?: boolean
    privateKey?: boolean
    funderAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["polymarketAccount"]>

  export type PolymarketAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secret?: boolean
    passphrase?: boolean
    privateKey?: boolean
    funderAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["polymarketAccount"]>

  export type PolymarketAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secret?: boolean
    passphrase?: boolean
    privateKey?: boolean
    funderAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["polymarketAccount"]>

  export type PolymarketAccountSelectScalar = {
    id?: boolean
    name?: boolean
    apiKey?: boolean
    secret?: boolean
    passphrase?: boolean
    privateKey?: boolean
    funderAddress?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolymarketAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiKey" | "secret" | "passphrase" | "privateKey" | "funderAddress" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["polymarketAccount"]>

  export type $PolymarketAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolymarketAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiKey: string
      secret: string
      passphrase: string
      privateKey: string
      funderAddress: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["polymarketAccount"]>
    composites: {}
  }

  type PolymarketAccountGetPayload<S extends boolean | null | undefined | PolymarketAccountDefaultArgs> = $Result.GetResult<Prisma.$PolymarketAccountPayload, S>

  type PolymarketAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolymarketAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolymarketAccountCountAggregateInputType | true
    }

  export interface PolymarketAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolymarketAccount'], meta: { name: 'PolymarketAccount' } }
    /**
     * Find zero or one PolymarketAccount that matches the filter.
     * @param {PolymarketAccountFindUniqueArgs} args - Arguments to find a PolymarketAccount
     * @example
     * // Get one PolymarketAccount
     * const polymarketAccount = await prisma.polymarketAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolymarketAccountFindUniqueArgs>(args: SelectSubset<T, PolymarketAccountFindUniqueArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PolymarketAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolymarketAccountFindUniqueOrThrowArgs} args - Arguments to find a PolymarketAccount
     * @example
     * // Get one PolymarketAccount
     * const polymarketAccount = await prisma.polymarketAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolymarketAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, PolymarketAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolymarketAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountFindFirstArgs} args - Arguments to find a PolymarketAccount
     * @example
     * // Get one PolymarketAccount
     * const polymarketAccount = await prisma.polymarketAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolymarketAccountFindFirstArgs>(args?: SelectSubset<T, PolymarketAccountFindFirstArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolymarketAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountFindFirstOrThrowArgs} args - Arguments to find a PolymarketAccount
     * @example
     * // Get one PolymarketAccount
     * const polymarketAccount = await prisma.polymarketAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolymarketAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, PolymarketAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PolymarketAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolymarketAccounts
     * const polymarketAccounts = await prisma.polymarketAccount.findMany()
     * 
     * // Get first 10 PolymarketAccounts
     * const polymarketAccounts = await prisma.polymarketAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const polymarketAccountWithIdOnly = await prisma.polymarketAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolymarketAccountFindManyArgs>(args?: SelectSubset<T, PolymarketAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PolymarketAccount.
     * @param {PolymarketAccountCreateArgs} args - Arguments to create a PolymarketAccount.
     * @example
     * // Create one PolymarketAccount
     * const PolymarketAccount = await prisma.polymarketAccount.create({
     *   data: {
     *     // ... data to create a PolymarketAccount
     *   }
     * })
     * 
     */
    create<T extends PolymarketAccountCreateArgs>(args: SelectSubset<T, PolymarketAccountCreateArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PolymarketAccounts.
     * @param {PolymarketAccountCreateManyArgs} args - Arguments to create many PolymarketAccounts.
     * @example
     * // Create many PolymarketAccounts
     * const polymarketAccount = await prisma.polymarketAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolymarketAccountCreateManyArgs>(args?: SelectSubset<T, PolymarketAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolymarketAccounts and returns the data saved in the database.
     * @param {PolymarketAccountCreateManyAndReturnArgs} args - Arguments to create many PolymarketAccounts.
     * @example
     * // Create many PolymarketAccounts
     * const polymarketAccount = await prisma.polymarketAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolymarketAccounts and only return the `id`
     * const polymarketAccountWithIdOnly = await prisma.polymarketAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolymarketAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, PolymarketAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PolymarketAccount.
     * @param {PolymarketAccountDeleteArgs} args - Arguments to delete one PolymarketAccount.
     * @example
     * // Delete one PolymarketAccount
     * const PolymarketAccount = await prisma.polymarketAccount.delete({
     *   where: {
     *     // ... filter to delete one PolymarketAccount
     *   }
     * })
     * 
     */
    delete<T extends PolymarketAccountDeleteArgs>(args: SelectSubset<T, PolymarketAccountDeleteArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PolymarketAccount.
     * @param {PolymarketAccountUpdateArgs} args - Arguments to update one PolymarketAccount.
     * @example
     * // Update one PolymarketAccount
     * const polymarketAccount = await prisma.polymarketAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolymarketAccountUpdateArgs>(args: SelectSubset<T, PolymarketAccountUpdateArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PolymarketAccounts.
     * @param {PolymarketAccountDeleteManyArgs} args - Arguments to filter PolymarketAccounts to delete.
     * @example
     * // Delete a few PolymarketAccounts
     * const { count } = await prisma.polymarketAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolymarketAccountDeleteManyArgs>(args?: SelectSubset<T, PolymarketAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolymarketAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolymarketAccounts
     * const polymarketAccount = await prisma.polymarketAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolymarketAccountUpdateManyArgs>(args: SelectSubset<T, PolymarketAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolymarketAccounts and returns the data updated in the database.
     * @param {PolymarketAccountUpdateManyAndReturnArgs} args - Arguments to update many PolymarketAccounts.
     * @example
     * // Update many PolymarketAccounts
     * const polymarketAccount = await prisma.polymarketAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PolymarketAccounts and only return the `id`
     * const polymarketAccountWithIdOnly = await prisma.polymarketAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PolymarketAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, PolymarketAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PolymarketAccount.
     * @param {PolymarketAccountUpsertArgs} args - Arguments to update or create a PolymarketAccount.
     * @example
     * // Update or create a PolymarketAccount
     * const polymarketAccount = await prisma.polymarketAccount.upsert({
     *   create: {
     *     // ... data to create a PolymarketAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolymarketAccount we want to update
     *   }
     * })
     */
    upsert<T extends PolymarketAccountUpsertArgs>(args: SelectSubset<T, PolymarketAccountUpsertArgs<ExtArgs>>): Prisma__PolymarketAccountClient<$Result.GetResult<Prisma.$PolymarketAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PolymarketAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountCountArgs} args - Arguments to filter PolymarketAccounts to count.
     * @example
     * // Count the number of PolymarketAccounts
     * const count = await prisma.polymarketAccount.count({
     *   where: {
     *     // ... the filter for the PolymarketAccounts we want to count
     *   }
     * })
    **/
    count<T extends PolymarketAccountCountArgs>(
      args?: Subset<T, PolymarketAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolymarketAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolymarketAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolymarketAccountAggregateArgs>(args: Subset<T, PolymarketAccountAggregateArgs>): Prisma.PrismaPromise<GetPolymarketAccountAggregateType<T>>

    /**
     * Group by PolymarketAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolymarketAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolymarketAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolymarketAccountGroupByArgs['orderBy'] }
        : { orderBy?: PolymarketAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolymarketAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolymarketAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolymarketAccount model
   */
  readonly fields: PolymarketAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolymarketAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolymarketAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PolymarketAccount model
   */
  interface PolymarketAccountFieldRefs {
    readonly id: FieldRef<"PolymarketAccount", 'String'>
    readonly name: FieldRef<"PolymarketAccount", 'String'>
    readonly apiKey: FieldRef<"PolymarketAccount", 'String'>
    readonly secret: FieldRef<"PolymarketAccount", 'String'>
    readonly passphrase: FieldRef<"PolymarketAccount", 'String'>
    readonly privateKey: FieldRef<"PolymarketAccount", 'String'>
    readonly funderAddress: FieldRef<"PolymarketAccount", 'String'>
    readonly isActive: FieldRef<"PolymarketAccount", 'Boolean'>
    readonly createdAt: FieldRef<"PolymarketAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"PolymarketAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PolymarketAccount findUnique
   */
  export type PolymarketAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * Filter, which PolymarketAccount to fetch.
     */
    where: PolymarketAccountWhereUniqueInput
  }

  /**
   * PolymarketAccount findUniqueOrThrow
   */
  export type PolymarketAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * Filter, which PolymarketAccount to fetch.
     */
    where: PolymarketAccountWhereUniqueInput
  }

  /**
   * PolymarketAccount findFirst
   */
  export type PolymarketAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * Filter, which PolymarketAccount to fetch.
     */
    where?: PolymarketAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolymarketAccounts to fetch.
     */
    orderBy?: PolymarketAccountOrderByWithRelationInput | PolymarketAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolymarketAccounts.
     */
    cursor?: PolymarketAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolymarketAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolymarketAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolymarketAccounts.
     */
    distinct?: PolymarketAccountScalarFieldEnum | PolymarketAccountScalarFieldEnum[]
  }

  /**
   * PolymarketAccount findFirstOrThrow
   */
  export type PolymarketAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * Filter, which PolymarketAccount to fetch.
     */
    where?: PolymarketAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolymarketAccounts to fetch.
     */
    orderBy?: PolymarketAccountOrderByWithRelationInput | PolymarketAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolymarketAccounts.
     */
    cursor?: PolymarketAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolymarketAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolymarketAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolymarketAccounts.
     */
    distinct?: PolymarketAccountScalarFieldEnum | PolymarketAccountScalarFieldEnum[]
  }

  /**
   * PolymarketAccount findMany
   */
  export type PolymarketAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * Filter, which PolymarketAccounts to fetch.
     */
    where?: PolymarketAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolymarketAccounts to fetch.
     */
    orderBy?: PolymarketAccountOrderByWithRelationInput | PolymarketAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolymarketAccounts.
     */
    cursor?: PolymarketAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolymarketAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolymarketAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolymarketAccounts.
     */
    distinct?: PolymarketAccountScalarFieldEnum | PolymarketAccountScalarFieldEnum[]
  }

  /**
   * PolymarketAccount create
   */
  export type PolymarketAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a PolymarketAccount.
     */
    data: XOR<PolymarketAccountCreateInput, PolymarketAccountUncheckedCreateInput>
  }

  /**
   * PolymarketAccount createMany
   */
  export type PolymarketAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolymarketAccounts.
     */
    data: PolymarketAccountCreateManyInput | PolymarketAccountCreateManyInput[]
  }

  /**
   * PolymarketAccount createManyAndReturn
   */
  export type PolymarketAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * The data used to create many PolymarketAccounts.
     */
    data: PolymarketAccountCreateManyInput | PolymarketAccountCreateManyInput[]
  }

  /**
   * PolymarketAccount update
   */
  export type PolymarketAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a PolymarketAccount.
     */
    data: XOR<PolymarketAccountUpdateInput, PolymarketAccountUncheckedUpdateInput>
    /**
     * Choose, which PolymarketAccount to update.
     */
    where: PolymarketAccountWhereUniqueInput
  }

  /**
   * PolymarketAccount updateMany
   */
  export type PolymarketAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolymarketAccounts.
     */
    data: XOR<PolymarketAccountUpdateManyMutationInput, PolymarketAccountUncheckedUpdateManyInput>
    /**
     * Filter which PolymarketAccounts to update
     */
    where?: PolymarketAccountWhereInput
    /**
     * Limit how many PolymarketAccounts to update.
     */
    limit?: number
  }

  /**
   * PolymarketAccount updateManyAndReturn
   */
  export type PolymarketAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * The data used to update PolymarketAccounts.
     */
    data: XOR<PolymarketAccountUpdateManyMutationInput, PolymarketAccountUncheckedUpdateManyInput>
    /**
     * Filter which PolymarketAccounts to update
     */
    where?: PolymarketAccountWhereInput
    /**
     * Limit how many PolymarketAccounts to update.
     */
    limit?: number
  }

  /**
   * PolymarketAccount upsert
   */
  export type PolymarketAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the PolymarketAccount to update in case it exists.
     */
    where: PolymarketAccountWhereUniqueInput
    /**
     * In case the PolymarketAccount found by the `where` argument doesn't exist, create a new PolymarketAccount with this data.
     */
    create: XOR<PolymarketAccountCreateInput, PolymarketAccountUncheckedCreateInput>
    /**
     * In case the PolymarketAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolymarketAccountUpdateInput, PolymarketAccountUncheckedUpdateInput>
  }

  /**
   * PolymarketAccount delete
   */
  export type PolymarketAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
    /**
     * Filter which PolymarketAccount to delete.
     */
    where: PolymarketAccountWhereUniqueInput
  }

  /**
   * PolymarketAccount deleteMany
   */
  export type PolymarketAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolymarketAccounts to delete
     */
    where?: PolymarketAccountWhereInput
    /**
     * Limit how many PolymarketAccounts to delete.
     */
    limit?: number
  }

  /**
   * PolymarketAccount without action
   */
  export type PolymarketAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolymarketAccount
     */
    select?: PolymarketAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolymarketAccount
     */
    omit?: PolymarketAccountOmit<ExtArgs> | null
  }


  /**
   * Model RiskPosition
   */

  export type AggregateRiskPosition = {
    _count: RiskPositionCountAggregateOutputType | null
    _avg: RiskPositionAvgAggregateOutputType | null
    _sum: RiskPositionSumAggregateOutputType | null
    _min: RiskPositionMinAggregateOutputType | null
    _max: RiskPositionMaxAggregateOutputType | null
  }

  export type RiskPositionAvgAggregateOutputType = {
    avgEntryCents: number | null
    sizeShares: number | null
    costUsd: number | null
    highWaterCents: number | null
    stopLossPct: number | null
  }

  export type RiskPositionSumAggregateOutputType = {
    avgEntryCents: number | null
    sizeShares: number | null
    costUsd: number | null
    highWaterCents: number | null
    stopLossPct: number | null
  }

  export type RiskPositionMinAggregateOutputType = {
    id: string | null
    platform: string | null
    outcomeId: string | null
    tokenId: string | null
    title: string | null
    sideLabel: string | null
    avgEntryCents: number | null
    sizeShares: number | null
    costUsd: number | null
    highWaterCents: number | null
    stopLossPct: number | null
    source: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskPositionMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    outcomeId: string | null
    tokenId: string | null
    title: string | null
    sideLabel: string | null
    avgEntryCents: number | null
    sizeShares: number | null
    costUsd: number | null
    highWaterCents: number | null
    stopLossPct: number | null
    source: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskPositionCountAggregateOutputType = {
    id: number
    platform: number
    outcomeId: number
    tokenId: number
    title: number
    sideLabel: number
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiskPositionAvgAggregateInputType = {
    avgEntryCents?: true
    sizeShares?: true
    costUsd?: true
    highWaterCents?: true
    stopLossPct?: true
  }

  export type RiskPositionSumAggregateInputType = {
    avgEntryCents?: true
    sizeShares?: true
    costUsd?: true
    highWaterCents?: true
    stopLossPct?: true
  }

  export type RiskPositionMinAggregateInputType = {
    id?: true
    platform?: true
    outcomeId?: true
    tokenId?: true
    title?: true
    sideLabel?: true
    avgEntryCents?: true
    sizeShares?: true
    costUsd?: true
    highWaterCents?: true
    stopLossPct?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskPositionMaxAggregateInputType = {
    id?: true
    platform?: true
    outcomeId?: true
    tokenId?: true
    title?: true
    sideLabel?: true
    avgEntryCents?: true
    sizeShares?: true
    costUsd?: true
    highWaterCents?: true
    stopLossPct?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskPositionCountAggregateInputType = {
    id?: true
    platform?: true
    outcomeId?: true
    tokenId?: true
    title?: true
    sideLabel?: true
    avgEntryCents?: true
    sizeShares?: true
    costUsd?: true
    highWaterCents?: true
    stopLossPct?: true
    source?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskPositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskPosition to aggregate.
     */
    where?: RiskPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPositions to fetch.
     */
    orderBy?: RiskPositionOrderByWithRelationInput | RiskPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskPositions
    **/
    _count?: true | RiskPositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskPositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskPositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskPositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskPositionMaxAggregateInputType
  }

  export type GetRiskPositionAggregateType<T extends RiskPositionAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskPosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskPosition[P]>
      : GetScalarType<T[P], AggregateRiskPosition[P]>
  }




  export type RiskPositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskPositionWhereInput
    orderBy?: RiskPositionOrderByWithAggregationInput | RiskPositionOrderByWithAggregationInput[]
    by: RiskPositionScalarFieldEnum[] | RiskPositionScalarFieldEnum
    having?: RiskPositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskPositionCountAggregateInputType | true
    _avg?: RiskPositionAvgAggregateInputType
    _sum?: RiskPositionSumAggregateInputType
    _min?: RiskPositionMinAggregateInputType
    _max?: RiskPositionMaxAggregateInputType
  }

  export type RiskPositionGroupByOutputType = {
    id: string
    platform: string
    outcomeId: string | null
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: RiskPositionCountAggregateOutputType | null
    _avg: RiskPositionAvgAggregateOutputType | null
    _sum: RiskPositionSumAggregateOutputType | null
    _min: RiskPositionMinAggregateOutputType | null
    _max: RiskPositionMaxAggregateOutputType | null
  }

  type GetRiskPositionGroupByPayload<T extends RiskPositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskPositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskPositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskPositionGroupByOutputType[P]>
            : GetScalarType<T[P], RiskPositionGroupByOutputType[P]>
        }
      >
    >


  export type RiskPositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    outcomeId?: boolean
    tokenId?: boolean
    title?: boolean
    sideLabel?: boolean
    avgEntryCents?: boolean
    sizeShares?: boolean
    costUsd?: boolean
    highWaterCents?: boolean
    stopLossPct?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outcome?: boolean | RiskPosition$outcomeArgs<ExtArgs>
    tasks?: boolean | RiskPosition$tasksArgs<ExtArgs>
    _count?: boolean | RiskPositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskPosition"]>

  export type RiskPositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    outcomeId?: boolean
    tokenId?: boolean
    title?: boolean
    sideLabel?: boolean
    avgEntryCents?: boolean
    sizeShares?: boolean
    costUsd?: boolean
    highWaterCents?: boolean
    stopLossPct?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outcome?: boolean | RiskPosition$outcomeArgs<ExtArgs>
  }, ExtArgs["result"]["riskPosition"]>

  export type RiskPositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    outcomeId?: boolean
    tokenId?: boolean
    title?: boolean
    sideLabel?: boolean
    avgEntryCents?: boolean
    sizeShares?: boolean
    costUsd?: boolean
    highWaterCents?: boolean
    stopLossPct?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outcome?: boolean | RiskPosition$outcomeArgs<ExtArgs>
  }, ExtArgs["result"]["riskPosition"]>

  export type RiskPositionSelectScalar = {
    id?: boolean
    platform?: boolean
    outcomeId?: boolean
    tokenId?: boolean
    title?: boolean
    sideLabel?: boolean
    avgEntryCents?: boolean
    sizeShares?: boolean
    costUsd?: boolean
    highWaterCents?: boolean
    stopLossPct?: boolean
    source?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiskPositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "outcomeId" | "tokenId" | "title" | "sideLabel" | "avgEntryCents" | "sizeShares" | "costUsd" | "highWaterCents" | "stopLossPct" | "source" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["riskPosition"]>
  export type RiskPositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcome?: boolean | RiskPosition$outcomeArgs<ExtArgs>
    tasks?: boolean | RiskPosition$tasksArgs<ExtArgs>
    _count?: boolean | RiskPositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RiskPositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcome?: boolean | RiskPosition$outcomeArgs<ExtArgs>
  }
  export type RiskPositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outcome?: boolean | RiskPosition$outcomeArgs<ExtArgs>
  }

  export type $RiskPositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskPosition"
    objects: {
      outcome: Prisma.$OutcomePayload<ExtArgs> | null
      tasks: Prisma.$RiskTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      /**
       * * Set when matched to a synced Outcome row; null for website-only positions not in local DB.
       */
      outcomeId: string | null
      tokenId: string
      title: string
      sideLabel: string
      avgEntryCents: number
      sizeShares: number
      costUsd: number
      highWaterCents: number
      stopLossPct: number
      /**
       * * bot = opened via this router; polymarket_clob = user WS / REST trade sync
       */
      source: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["riskPosition"]>
    composites: {}
  }

  type RiskPositionGetPayload<S extends boolean | null | undefined | RiskPositionDefaultArgs> = $Result.GetResult<Prisma.$RiskPositionPayload, S>

  type RiskPositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskPositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskPositionCountAggregateInputType | true
    }

  export interface RiskPositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskPosition'], meta: { name: 'RiskPosition' } }
    /**
     * Find zero or one RiskPosition that matches the filter.
     * @param {RiskPositionFindUniqueArgs} args - Arguments to find a RiskPosition
     * @example
     * // Get one RiskPosition
     * const riskPosition = await prisma.riskPosition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskPositionFindUniqueArgs>(args: SelectSubset<T, RiskPositionFindUniqueArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskPosition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskPositionFindUniqueOrThrowArgs} args - Arguments to find a RiskPosition
     * @example
     * // Get one RiskPosition
     * const riskPosition = await prisma.riskPosition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskPositionFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskPositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskPosition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionFindFirstArgs} args - Arguments to find a RiskPosition
     * @example
     * // Get one RiskPosition
     * const riskPosition = await prisma.riskPosition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskPositionFindFirstArgs>(args?: SelectSubset<T, RiskPositionFindFirstArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskPosition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionFindFirstOrThrowArgs} args - Arguments to find a RiskPosition
     * @example
     * // Get one RiskPosition
     * const riskPosition = await prisma.riskPosition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskPositionFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskPositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskPositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskPositions
     * const riskPositions = await prisma.riskPosition.findMany()
     * 
     * // Get first 10 RiskPositions
     * const riskPositions = await prisma.riskPosition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskPositionWithIdOnly = await prisma.riskPosition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskPositionFindManyArgs>(args?: SelectSubset<T, RiskPositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskPosition.
     * @param {RiskPositionCreateArgs} args - Arguments to create a RiskPosition.
     * @example
     * // Create one RiskPosition
     * const RiskPosition = await prisma.riskPosition.create({
     *   data: {
     *     // ... data to create a RiskPosition
     *   }
     * })
     * 
     */
    create<T extends RiskPositionCreateArgs>(args: SelectSubset<T, RiskPositionCreateArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskPositions.
     * @param {RiskPositionCreateManyArgs} args - Arguments to create many RiskPositions.
     * @example
     * // Create many RiskPositions
     * const riskPosition = await prisma.riskPosition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskPositionCreateManyArgs>(args?: SelectSubset<T, RiskPositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskPositions and returns the data saved in the database.
     * @param {RiskPositionCreateManyAndReturnArgs} args - Arguments to create many RiskPositions.
     * @example
     * // Create many RiskPositions
     * const riskPosition = await prisma.riskPosition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskPositions and only return the `id`
     * const riskPositionWithIdOnly = await prisma.riskPosition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskPositionCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskPositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskPosition.
     * @param {RiskPositionDeleteArgs} args - Arguments to delete one RiskPosition.
     * @example
     * // Delete one RiskPosition
     * const RiskPosition = await prisma.riskPosition.delete({
     *   where: {
     *     // ... filter to delete one RiskPosition
     *   }
     * })
     * 
     */
    delete<T extends RiskPositionDeleteArgs>(args: SelectSubset<T, RiskPositionDeleteArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskPosition.
     * @param {RiskPositionUpdateArgs} args - Arguments to update one RiskPosition.
     * @example
     * // Update one RiskPosition
     * const riskPosition = await prisma.riskPosition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskPositionUpdateArgs>(args: SelectSubset<T, RiskPositionUpdateArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskPositions.
     * @param {RiskPositionDeleteManyArgs} args - Arguments to filter RiskPositions to delete.
     * @example
     * // Delete a few RiskPositions
     * const { count } = await prisma.riskPosition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskPositionDeleteManyArgs>(args?: SelectSubset<T, RiskPositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskPositions
     * const riskPosition = await prisma.riskPosition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskPositionUpdateManyArgs>(args: SelectSubset<T, RiskPositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskPositions and returns the data updated in the database.
     * @param {RiskPositionUpdateManyAndReturnArgs} args - Arguments to update many RiskPositions.
     * @example
     * // Update many RiskPositions
     * const riskPosition = await prisma.riskPosition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskPositions and only return the `id`
     * const riskPositionWithIdOnly = await prisma.riskPosition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskPositionUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskPositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskPosition.
     * @param {RiskPositionUpsertArgs} args - Arguments to update or create a RiskPosition.
     * @example
     * // Update or create a RiskPosition
     * const riskPosition = await prisma.riskPosition.upsert({
     *   create: {
     *     // ... data to create a RiskPosition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskPosition we want to update
     *   }
     * })
     */
    upsert<T extends RiskPositionUpsertArgs>(args: SelectSubset<T, RiskPositionUpsertArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskPositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionCountArgs} args - Arguments to filter RiskPositions to count.
     * @example
     * // Count the number of RiskPositions
     * const count = await prisma.riskPosition.count({
     *   where: {
     *     // ... the filter for the RiskPositions we want to count
     *   }
     * })
    **/
    count<T extends RiskPositionCountArgs>(
      args?: Subset<T, RiskPositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskPositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskPositionAggregateArgs>(args: Subset<T, RiskPositionAggregateArgs>): Prisma.PrismaPromise<GetRiskPositionAggregateType<T>>

    /**
     * Group by RiskPosition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskPositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskPositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskPositionGroupByArgs['orderBy'] }
        : { orderBy?: RiskPositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskPositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskPosition model
   */
  readonly fields: RiskPositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskPosition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskPositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outcome<T extends RiskPosition$outcomeArgs<ExtArgs> = {}>(args?: Subset<T, RiskPosition$outcomeArgs<ExtArgs>>): Prisma__OutcomeClient<$Result.GetResult<Prisma.$OutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends RiskPosition$tasksArgs<ExtArgs> = {}>(args?: Subset<T, RiskPosition$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskPosition model
   */
  interface RiskPositionFieldRefs {
    readonly id: FieldRef<"RiskPosition", 'String'>
    readonly platform: FieldRef<"RiskPosition", 'String'>
    readonly outcomeId: FieldRef<"RiskPosition", 'String'>
    readonly tokenId: FieldRef<"RiskPosition", 'String'>
    readonly title: FieldRef<"RiskPosition", 'String'>
    readonly sideLabel: FieldRef<"RiskPosition", 'String'>
    readonly avgEntryCents: FieldRef<"RiskPosition", 'Float'>
    readonly sizeShares: FieldRef<"RiskPosition", 'Float'>
    readonly costUsd: FieldRef<"RiskPosition", 'Float'>
    readonly highWaterCents: FieldRef<"RiskPosition", 'Float'>
    readonly stopLossPct: FieldRef<"RiskPosition", 'Float'>
    readonly source: FieldRef<"RiskPosition", 'String'>
    readonly status: FieldRef<"RiskPosition", 'String'>
    readonly createdAt: FieldRef<"RiskPosition", 'DateTime'>
    readonly updatedAt: FieldRef<"RiskPosition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskPosition findUnique
   */
  export type RiskPositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * Filter, which RiskPosition to fetch.
     */
    where: RiskPositionWhereUniqueInput
  }

  /**
   * RiskPosition findUniqueOrThrow
   */
  export type RiskPositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * Filter, which RiskPosition to fetch.
     */
    where: RiskPositionWhereUniqueInput
  }

  /**
   * RiskPosition findFirst
   */
  export type RiskPositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * Filter, which RiskPosition to fetch.
     */
    where?: RiskPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPositions to fetch.
     */
    orderBy?: RiskPositionOrderByWithRelationInput | RiskPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskPositions.
     */
    cursor?: RiskPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskPositions.
     */
    distinct?: RiskPositionScalarFieldEnum | RiskPositionScalarFieldEnum[]
  }

  /**
   * RiskPosition findFirstOrThrow
   */
  export type RiskPositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * Filter, which RiskPosition to fetch.
     */
    where?: RiskPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPositions to fetch.
     */
    orderBy?: RiskPositionOrderByWithRelationInput | RiskPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskPositions.
     */
    cursor?: RiskPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskPositions.
     */
    distinct?: RiskPositionScalarFieldEnum | RiskPositionScalarFieldEnum[]
  }

  /**
   * RiskPosition findMany
   */
  export type RiskPositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * Filter, which RiskPositions to fetch.
     */
    where?: RiskPositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskPositions to fetch.
     */
    orderBy?: RiskPositionOrderByWithRelationInput | RiskPositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskPositions.
     */
    cursor?: RiskPositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskPositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskPositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskPositions.
     */
    distinct?: RiskPositionScalarFieldEnum | RiskPositionScalarFieldEnum[]
  }

  /**
   * RiskPosition create
   */
  export type RiskPositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskPosition.
     */
    data: XOR<RiskPositionCreateInput, RiskPositionUncheckedCreateInput>
  }

  /**
   * RiskPosition createMany
   */
  export type RiskPositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskPositions.
     */
    data: RiskPositionCreateManyInput | RiskPositionCreateManyInput[]
  }

  /**
   * RiskPosition createManyAndReturn
   */
  export type RiskPositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * The data used to create many RiskPositions.
     */
    data: RiskPositionCreateManyInput | RiskPositionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskPosition update
   */
  export type RiskPositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskPosition.
     */
    data: XOR<RiskPositionUpdateInput, RiskPositionUncheckedUpdateInput>
    /**
     * Choose, which RiskPosition to update.
     */
    where: RiskPositionWhereUniqueInput
  }

  /**
   * RiskPosition updateMany
   */
  export type RiskPositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskPositions.
     */
    data: XOR<RiskPositionUpdateManyMutationInput, RiskPositionUncheckedUpdateManyInput>
    /**
     * Filter which RiskPositions to update
     */
    where?: RiskPositionWhereInput
    /**
     * Limit how many RiskPositions to update.
     */
    limit?: number
  }

  /**
   * RiskPosition updateManyAndReturn
   */
  export type RiskPositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * The data used to update RiskPositions.
     */
    data: XOR<RiskPositionUpdateManyMutationInput, RiskPositionUncheckedUpdateManyInput>
    /**
     * Filter which RiskPositions to update
     */
    where?: RiskPositionWhereInput
    /**
     * Limit how many RiskPositions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskPosition upsert
   */
  export type RiskPositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskPosition to update in case it exists.
     */
    where: RiskPositionWhereUniqueInput
    /**
     * In case the RiskPosition found by the `where` argument doesn't exist, create a new RiskPosition with this data.
     */
    create: XOR<RiskPositionCreateInput, RiskPositionUncheckedCreateInput>
    /**
     * In case the RiskPosition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskPositionUpdateInput, RiskPositionUncheckedUpdateInput>
  }

  /**
   * RiskPosition delete
   */
  export type RiskPositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    /**
     * Filter which RiskPosition to delete.
     */
    where: RiskPositionWhereUniqueInput
  }

  /**
   * RiskPosition deleteMany
   */
  export type RiskPositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskPositions to delete
     */
    where?: RiskPositionWhereInput
    /**
     * Limit how many RiskPositions to delete.
     */
    limit?: number
  }

  /**
   * RiskPosition.outcome
   */
  export type RiskPosition$outcomeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outcome
     */
    select?: OutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outcome
     */
    omit?: OutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutcomeInclude<ExtArgs> | null
    where?: OutcomeWhereInput
  }

  /**
   * RiskPosition.tasks
   */
  export type RiskPosition$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    where?: RiskTaskWhereInput
    orderBy?: RiskTaskOrderByWithRelationInput | RiskTaskOrderByWithRelationInput[]
    cursor?: RiskTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RiskTaskScalarFieldEnum | RiskTaskScalarFieldEnum[]
  }

  /**
   * RiskPosition without action
   */
  export type RiskPositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
  }


  /**
   * Model RiskAppliedClobTrade
   */

  export type AggregateRiskAppliedClobTrade = {
    _count: RiskAppliedClobTradeCountAggregateOutputType | null
    _min: RiskAppliedClobTradeMinAggregateOutputType | null
    _max: RiskAppliedClobTradeMaxAggregateOutputType | null
  }

  export type RiskAppliedClobTradeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type RiskAppliedClobTradeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type RiskAppliedClobTradeCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type RiskAppliedClobTradeMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type RiskAppliedClobTradeMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type RiskAppliedClobTradeCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type RiskAppliedClobTradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAppliedClobTrade to aggregate.
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAppliedClobTrades to fetch.
     */
    orderBy?: RiskAppliedClobTradeOrderByWithRelationInput | RiskAppliedClobTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskAppliedClobTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAppliedClobTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAppliedClobTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskAppliedClobTrades
    **/
    _count?: true | RiskAppliedClobTradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskAppliedClobTradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskAppliedClobTradeMaxAggregateInputType
  }

  export type GetRiskAppliedClobTradeAggregateType<T extends RiskAppliedClobTradeAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskAppliedClobTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskAppliedClobTrade[P]>
      : GetScalarType<T[P], AggregateRiskAppliedClobTrade[P]>
  }




  export type RiskAppliedClobTradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskAppliedClobTradeWhereInput
    orderBy?: RiskAppliedClobTradeOrderByWithAggregationInput | RiskAppliedClobTradeOrderByWithAggregationInput[]
    by: RiskAppliedClobTradeScalarFieldEnum[] | RiskAppliedClobTradeScalarFieldEnum
    having?: RiskAppliedClobTradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskAppliedClobTradeCountAggregateInputType | true
    _min?: RiskAppliedClobTradeMinAggregateInputType
    _max?: RiskAppliedClobTradeMaxAggregateInputType
  }

  export type RiskAppliedClobTradeGroupByOutputType = {
    id: string
    createdAt: Date
    _count: RiskAppliedClobTradeCountAggregateOutputType | null
    _min: RiskAppliedClobTradeMinAggregateOutputType | null
    _max: RiskAppliedClobTradeMaxAggregateOutputType | null
  }

  type GetRiskAppliedClobTradeGroupByPayload<T extends RiskAppliedClobTradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskAppliedClobTradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskAppliedClobTradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskAppliedClobTradeGroupByOutputType[P]>
            : GetScalarType<T[P], RiskAppliedClobTradeGroupByOutputType[P]>
        }
      >
    >


  export type RiskAppliedClobTradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["riskAppliedClobTrade"]>

  export type RiskAppliedClobTradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["riskAppliedClobTrade"]>

  export type RiskAppliedClobTradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["riskAppliedClobTrade"]>

  export type RiskAppliedClobTradeSelectScalar = {
    id?: boolean
    createdAt?: boolean
  }

  export type RiskAppliedClobTradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt", ExtArgs["result"]["riskAppliedClobTrade"]>

  export type $RiskAppliedClobTradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskAppliedClobTrade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
    }, ExtArgs["result"]["riskAppliedClobTrade"]>
    composites: {}
  }

  type RiskAppliedClobTradeGetPayload<S extends boolean | null | undefined | RiskAppliedClobTradeDefaultArgs> = $Result.GetResult<Prisma.$RiskAppliedClobTradePayload, S>

  type RiskAppliedClobTradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskAppliedClobTradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskAppliedClobTradeCountAggregateInputType | true
    }

  export interface RiskAppliedClobTradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskAppliedClobTrade'], meta: { name: 'RiskAppliedClobTrade' } }
    /**
     * Find zero or one RiskAppliedClobTrade that matches the filter.
     * @param {RiskAppliedClobTradeFindUniqueArgs} args - Arguments to find a RiskAppliedClobTrade
     * @example
     * // Get one RiskAppliedClobTrade
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskAppliedClobTradeFindUniqueArgs>(args: SelectSubset<T, RiskAppliedClobTradeFindUniqueArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskAppliedClobTrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskAppliedClobTradeFindUniqueOrThrowArgs} args - Arguments to find a RiskAppliedClobTrade
     * @example
     * // Get one RiskAppliedClobTrade
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskAppliedClobTradeFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskAppliedClobTradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAppliedClobTrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeFindFirstArgs} args - Arguments to find a RiskAppliedClobTrade
     * @example
     * // Get one RiskAppliedClobTrade
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskAppliedClobTradeFindFirstArgs>(args?: SelectSubset<T, RiskAppliedClobTradeFindFirstArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskAppliedClobTrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeFindFirstOrThrowArgs} args - Arguments to find a RiskAppliedClobTrade
     * @example
     * // Get one RiskAppliedClobTrade
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskAppliedClobTradeFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskAppliedClobTradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskAppliedClobTrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskAppliedClobTrades
     * const riskAppliedClobTrades = await prisma.riskAppliedClobTrade.findMany()
     * 
     * // Get first 10 RiskAppliedClobTrades
     * const riskAppliedClobTrades = await prisma.riskAppliedClobTrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskAppliedClobTradeWithIdOnly = await prisma.riskAppliedClobTrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskAppliedClobTradeFindManyArgs>(args?: SelectSubset<T, RiskAppliedClobTradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskAppliedClobTrade.
     * @param {RiskAppliedClobTradeCreateArgs} args - Arguments to create a RiskAppliedClobTrade.
     * @example
     * // Create one RiskAppliedClobTrade
     * const RiskAppliedClobTrade = await prisma.riskAppliedClobTrade.create({
     *   data: {
     *     // ... data to create a RiskAppliedClobTrade
     *   }
     * })
     * 
     */
    create<T extends RiskAppliedClobTradeCreateArgs>(args: SelectSubset<T, RiskAppliedClobTradeCreateArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskAppliedClobTrades.
     * @param {RiskAppliedClobTradeCreateManyArgs} args - Arguments to create many RiskAppliedClobTrades.
     * @example
     * // Create many RiskAppliedClobTrades
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskAppliedClobTradeCreateManyArgs>(args?: SelectSubset<T, RiskAppliedClobTradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskAppliedClobTrades and returns the data saved in the database.
     * @param {RiskAppliedClobTradeCreateManyAndReturnArgs} args - Arguments to create many RiskAppliedClobTrades.
     * @example
     * // Create many RiskAppliedClobTrades
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskAppliedClobTrades and only return the `id`
     * const riskAppliedClobTradeWithIdOnly = await prisma.riskAppliedClobTrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskAppliedClobTradeCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskAppliedClobTradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskAppliedClobTrade.
     * @param {RiskAppliedClobTradeDeleteArgs} args - Arguments to delete one RiskAppliedClobTrade.
     * @example
     * // Delete one RiskAppliedClobTrade
     * const RiskAppliedClobTrade = await prisma.riskAppliedClobTrade.delete({
     *   where: {
     *     // ... filter to delete one RiskAppliedClobTrade
     *   }
     * })
     * 
     */
    delete<T extends RiskAppliedClobTradeDeleteArgs>(args: SelectSubset<T, RiskAppliedClobTradeDeleteArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskAppliedClobTrade.
     * @param {RiskAppliedClobTradeUpdateArgs} args - Arguments to update one RiskAppliedClobTrade.
     * @example
     * // Update one RiskAppliedClobTrade
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskAppliedClobTradeUpdateArgs>(args: SelectSubset<T, RiskAppliedClobTradeUpdateArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskAppliedClobTrades.
     * @param {RiskAppliedClobTradeDeleteManyArgs} args - Arguments to filter RiskAppliedClobTrades to delete.
     * @example
     * // Delete a few RiskAppliedClobTrades
     * const { count } = await prisma.riskAppliedClobTrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskAppliedClobTradeDeleteManyArgs>(args?: SelectSubset<T, RiskAppliedClobTradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAppliedClobTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskAppliedClobTrades
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskAppliedClobTradeUpdateManyArgs>(args: SelectSubset<T, RiskAppliedClobTradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskAppliedClobTrades and returns the data updated in the database.
     * @param {RiskAppliedClobTradeUpdateManyAndReturnArgs} args - Arguments to update many RiskAppliedClobTrades.
     * @example
     * // Update many RiskAppliedClobTrades
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskAppliedClobTrades and only return the `id`
     * const riskAppliedClobTradeWithIdOnly = await prisma.riskAppliedClobTrade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskAppliedClobTradeUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskAppliedClobTradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskAppliedClobTrade.
     * @param {RiskAppliedClobTradeUpsertArgs} args - Arguments to update or create a RiskAppliedClobTrade.
     * @example
     * // Update or create a RiskAppliedClobTrade
     * const riskAppliedClobTrade = await prisma.riskAppliedClobTrade.upsert({
     *   create: {
     *     // ... data to create a RiskAppliedClobTrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskAppliedClobTrade we want to update
     *   }
     * })
     */
    upsert<T extends RiskAppliedClobTradeUpsertArgs>(args: SelectSubset<T, RiskAppliedClobTradeUpsertArgs<ExtArgs>>): Prisma__RiskAppliedClobTradeClient<$Result.GetResult<Prisma.$RiskAppliedClobTradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskAppliedClobTrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeCountArgs} args - Arguments to filter RiskAppliedClobTrades to count.
     * @example
     * // Count the number of RiskAppliedClobTrades
     * const count = await prisma.riskAppliedClobTrade.count({
     *   where: {
     *     // ... the filter for the RiskAppliedClobTrades we want to count
     *   }
     * })
    **/
    count<T extends RiskAppliedClobTradeCountArgs>(
      args?: Subset<T, RiskAppliedClobTradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskAppliedClobTradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskAppliedClobTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskAppliedClobTradeAggregateArgs>(args: Subset<T, RiskAppliedClobTradeAggregateArgs>): Prisma.PrismaPromise<GetRiskAppliedClobTradeAggregateType<T>>

    /**
     * Group by RiskAppliedClobTrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskAppliedClobTradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskAppliedClobTradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskAppliedClobTradeGroupByArgs['orderBy'] }
        : { orderBy?: RiskAppliedClobTradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskAppliedClobTradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskAppliedClobTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskAppliedClobTrade model
   */
  readonly fields: RiskAppliedClobTradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskAppliedClobTrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskAppliedClobTradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskAppliedClobTrade model
   */
  interface RiskAppliedClobTradeFieldRefs {
    readonly id: FieldRef<"RiskAppliedClobTrade", 'String'>
    readonly createdAt: FieldRef<"RiskAppliedClobTrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskAppliedClobTrade findUnique
   */
  export type RiskAppliedClobTradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * Filter, which RiskAppliedClobTrade to fetch.
     */
    where: RiskAppliedClobTradeWhereUniqueInput
  }

  /**
   * RiskAppliedClobTrade findUniqueOrThrow
   */
  export type RiskAppliedClobTradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * Filter, which RiskAppliedClobTrade to fetch.
     */
    where: RiskAppliedClobTradeWhereUniqueInput
  }

  /**
   * RiskAppliedClobTrade findFirst
   */
  export type RiskAppliedClobTradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * Filter, which RiskAppliedClobTrade to fetch.
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAppliedClobTrades to fetch.
     */
    orderBy?: RiskAppliedClobTradeOrderByWithRelationInput | RiskAppliedClobTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAppliedClobTrades.
     */
    cursor?: RiskAppliedClobTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAppliedClobTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAppliedClobTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAppliedClobTrades.
     */
    distinct?: RiskAppliedClobTradeScalarFieldEnum | RiskAppliedClobTradeScalarFieldEnum[]
  }

  /**
   * RiskAppliedClobTrade findFirstOrThrow
   */
  export type RiskAppliedClobTradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * Filter, which RiskAppliedClobTrade to fetch.
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAppliedClobTrades to fetch.
     */
    orderBy?: RiskAppliedClobTradeOrderByWithRelationInput | RiskAppliedClobTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskAppliedClobTrades.
     */
    cursor?: RiskAppliedClobTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAppliedClobTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAppliedClobTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAppliedClobTrades.
     */
    distinct?: RiskAppliedClobTradeScalarFieldEnum | RiskAppliedClobTradeScalarFieldEnum[]
  }

  /**
   * RiskAppliedClobTrade findMany
   */
  export type RiskAppliedClobTradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * Filter, which RiskAppliedClobTrades to fetch.
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskAppliedClobTrades to fetch.
     */
    orderBy?: RiskAppliedClobTradeOrderByWithRelationInput | RiskAppliedClobTradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskAppliedClobTrades.
     */
    cursor?: RiskAppliedClobTradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskAppliedClobTrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskAppliedClobTrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskAppliedClobTrades.
     */
    distinct?: RiskAppliedClobTradeScalarFieldEnum | RiskAppliedClobTradeScalarFieldEnum[]
  }

  /**
   * RiskAppliedClobTrade create
   */
  export type RiskAppliedClobTradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * The data needed to create a RiskAppliedClobTrade.
     */
    data: XOR<RiskAppliedClobTradeCreateInput, RiskAppliedClobTradeUncheckedCreateInput>
  }

  /**
   * RiskAppliedClobTrade createMany
   */
  export type RiskAppliedClobTradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskAppliedClobTrades.
     */
    data: RiskAppliedClobTradeCreateManyInput | RiskAppliedClobTradeCreateManyInput[]
  }

  /**
   * RiskAppliedClobTrade createManyAndReturn
   */
  export type RiskAppliedClobTradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * The data used to create many RiskAppliedClobTrades.
     */
    data: RiskAppliedClobTradeCreateManyInput | RiskAppliedClobTradeCreateManyInput[]
  }

  /**
   * RiskAppliedClobTrade update
   */
  export type RiskAppliedClobTradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * The data needed to update a RiskAppliedClobTrade.
     */
    data: XOR<RiskAppliedClobTradeUpdateInput, RiskAppliedClobTradeUncheckedUpdateInput>
    /**
     * Choose, which RiskAppliedClobTrade to update.
     */
    where: RiskAppliedClobTradeWhereUniqueInput
  }

  /**
   * RiskAppliedClobTrade updateMany
   */
  export type RiskAppliedClobTradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskAppliedClobTrades.
     */
    data: XOR<RiskAppliedClobTradeUpdateManyMutationInput, RiskAppliedClobTradeUncheckedUpdateManyInput>
    /**
     * Filter which RiskAppliedClobTrades to update
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * Limit how many RiskAppliedClobTrades to update.
     */
    limit?: number
  }

  /**
   * RiskAppliedClobTrade updateManyAndReturn
   */
  export type RiskAppliedClobTradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * The data used to update RiskAppliedClobTrades.
     */
    data: XOR<RiskAppliedClobTradeUpdateManyMutationInput, RiskAppliedClobTradeUncheckedUpdateManyInput>
    /**
     * Filter which RiskAppliedClobTrades to update
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * Limit how many RiskAppliedClobTrades to update.
     */
    limit?: number
  }

  /**
   * RiskAppliedClobTrade upsert
   */
  export type RiskAppliedClobTradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * The filter to search for the RiskAppliedClobTrade to update in case it exists.
     */
    where: RiskAppliedClobTradeWhereUniqueInput
    /**
     * In case the RiskAppliedClobTrade found by the `where` argument doesn't exist, create a new RiskAppliedClobTrade with this data.
     */
    create: XOR<RiskAppliedClobTradeCreateInput, RiskAppliedClobTradeUncheckedCreateInput>
    /**
     * In case the RiskAppliedClobTrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskAppliedClobTradeUpdateInput, RiskAppliedClobTradeUncheckedUpdateInput>
  }

  /**
   * RiskAppliedClobTrade delete
   */
  export type RiskAppliedClobTradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
    /**
     * Filter which RiskAppliedClobTrade to delete.
     */
    where: RiskAppliedClobTradeWhereUniqueInput
  }

  /**
   * RiskAppliedClobTrade deleteMany
   */
  export type RiskAppliedClobTradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskAppliedClobTrades to delete
     */
    where?: RiskAppliedClobTradeWhereInput
    /**
     * Limit how many RiskAppliedClobTrades to delete.
     */
    limit?: number
  }

  /**
   * RiskAppliedClobTrade without action
   */
  export type RiskAppliedClobTradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskAppliedClobTrade
     */
    select?: RiskAppliedClobTradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskAppliedClobTrade
     */
    omit?: RiskAppliedClobTradeOmit<ExtArgs> | null
  }


  /**
   * Model RiskTask
   */

  export type AggregateRiskTask = {
    _count: RiskTaskCountAggregateOutputType | null
    _avg: RiskTaskAvgAggregateOutputType | null
    _sum: RiskTaskSumAggregateOutputType | null
    _min: RiskTaskMinAggregateOutputType | null
    _max: RiskTaskMaxAggregateOutputType | null
  }

  export type RiskTaskAvgAggregateOutputType = {
    attempts: number | null
  }

  export type RiskTaskSumAggregateOutputType = {
    attempts: number | null
  }

  export type RiskTaskMinAggregateOutputType = {
    id: string | null
    type: string | null
    positionId: string | null
    status: string | null
    attempts: number | null
    lastError: string | null
    nextRunAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskTaskMaxAggregateOutputType = {
    id: string | null
    type: string | null
    positionId: string | null
    status: string | null
    attempts: number | null
    lastError: string | null
    nextRunAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskTaskCountAggregateOutputType = {
    id: number
    type: number
    positionId: number
    status: number
    attempts: number
    lastError: number
    nextRunAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiskTaskAvgAggregateInputType = {
    attempts?: true
  }

  export type RiskTaskSumAggregateInputType = {
    attempts?: true
  }

  export type RiskTaskMinAggregateInputType = {
    id?: true
    type?: true
    positionId?: true
    status?: true
    attempts?: true
    lastError?: true
    nextRunAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskTaskMaxAggregateInputType = {
    id?: true
    type?: true
    positionId?: true
    status?: true
    attempts?: true
    lastError?: true
    nextRunAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskTaskCountAggregateInputType = {
    id?: true
    type?: true
    positionId?: true
    status?: true
    attempts?: true
    lastError?: true
    nextRunAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskTask to aggregate.
     */
    where?: RiskTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskTasks to fetch.
     */
    orderBy?: RiskTaskOrderByWithRelationInput | RiskTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskTasks
    **/
    _count?: true | RiskTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskTaskMaxAggregateInputType
  }

  export type GetRiskTaskAggregateType<T extends RiskTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskTask[P]>
      : GetScalarType<T[P], AggregateRiskTask[P]>
  }




  export type RiskTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskTaskWhereInput
    orderBy?: RiskTaskOrderByWithAggregationInput | RiskTaskOrderByWithAggregationInput[]
    by: RiskTaskScalarFieldEnum[] | RiskTaskScalarFieldEnum
    having?: RiskTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskTaskCountAggregateInputType | true
    _avg?: RiskTaskAvgAggregateInputType
    _sum?: RiskTaskSumAggregateInputType
    _min?: RiskTaskMinAggregateInputType
    _max?: RiskTaskMaxAggregateInputType
  }

  export type RiskTaskGroupByOutputType = {
    id: string
    type: string
    positionId: string | null
    status: string
    attempts: number
    lastError: string | null
    nextRunAt: Date
    createdAt: Date
    updatedAt: Date
    _count: RiskTaskCountAggregateOutputType | null
    _avg: RiskTaskAvgAggregateOutputType | null
    _sum: RiskTaskSumAggregateOutputType | null
    _min: RiskTaskMinAggregateOutputType | null
    _max: RiskTaskMaxAggregateOutputType | null
  }

  type GetRiskTaskGroupByPayload<T extends RiskTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskTaskGroupByOutputType[P]>
            : GetScalarType<T[P], RiskTaskGroupByOutputType[P]>
        }
      >
    >


  export type RiskTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    positionId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean | RiskTask$positionArgs<ExtArgs>
  }, ExtArgs["result"]["riskTask"]>

  export type RiskTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    positionId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean | RiskTask$positionArgs<ExtArgs>
  }, ExtArgs["result"]["riskTask"]>

  export type RiskTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    positionId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean | RiskTask$positionArgs<ExtArgs>
  }, ExtArgs["result"]["riskTask"]>

  export type RiskTaskSelectScalar = {
    id?: boolean
    type?: boolean
    positionId?: boolean
    status?: boolean
    attempts?: boolean
    lastError?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiskTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "positionId" | "status" | "attempts" | "lastError" | "nextRunAt" | "createdAt" | "updatedAt", ExtArgs["result"]["riskTask"]>
  export type RiskTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | RiskTask$positionArgs<ExtArgs>
  }
  export type RiskTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | RiskTask$positionArgs<ExtArgs>
  }
  export type RiskTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | RiskTask$positionArgs<ExtArgs>
  }

  export type $RiskTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskTask"
    objects: {
      position: Prisma.$RiskPositionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      positionId: string | null
      status: string
      attempts: number
      lastError: string | null
      nextRunAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["riskTask"]>
    composites: {}
  }

  type RiskTaskGetPayload<S extends boolean | null | undefined | RiskTaskDefaultArgs> = $Result.GetResult<Prisma.$RiskTaskPayload, S>

  type RiskTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskTaskCountAggregateInputType | true
    }

  export interface RiskTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskTask'], meta: { name: 'RiskTask' } }
    /**
     * Find zero or one RiskTask that matches the filter.
     * @param {RiskTaskFindUniqueArgs} args - Arguments to find a RiskTask
     * @example
     * // Get one RiskTask
     * const riskTask = await prisma.riskTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskTaskFindUniqueArgs>(args: SelectSubset<T, RiskTaskFindUniqueArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskTaskFindUniqueOrThrowArgs} args - Arguments to find a RiskTask
     * @example
     * // Get one RiskTask
     * const riskTask = await prisma.riskTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskFindFirstArgs} args - Arguments to find a RiskTask
     * @example
     * // Get one RiskTask
     * const riskTask = await prisma.riskTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskTaskFindFirstArgs>(args?: SelectSubset<T, RiskTaskFindFirstArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskFindFirstOrThrowArgs} args - Arguments to find a RiskTask
     * @example
     * // Get one RiskTask
     * const riskTask = await prisma.riskTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskTasks
     * const riskTasks = await prisma.riskTask.findMany()
     * 
     * // Get first 10 RiskTasks
     * const riskTasks = await prisma.riskTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskTaskWithIdOnly = await prisma.riskTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskTaskFindManyArgs>(args?: SelectSubset<T, RiskTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskTask.
     * @param {RiskTaskCreateArgs} args - Arguments to create a RiskTask.
     * @example
     * // Create one RiskTask
     * const RiskTask = await prisma.riskTask.create({
     *   data: {
     *     // ... data to create a RiskTask
     *   }
     * })
     * 
     */
    create<T extends RiskTaskCreateArgs>(args: SelectSubset<T, RiskTaskCreateArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskTasks.
     * @param {RiskTaskCreateManyArgs} args - Arguments to create many RiskTasks.
     * @example
     * // Create many RiskTasks
     * const riskTask = await prisma.riskTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskTaskCreateManyArgs>(args?: SelectSubset<T, RiskTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskTasks and returns the data saved in the database.
     * @param {RiskTaskCreateManyAndReturnArgs} args - Arguments to create many RiskTasks.
     * @example
     * // Create many RiskTasks
     * const riskTask = await prisma.riskTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskTasks and only return the `id`
     * const riskTaskWithIdOnly = await prisma.riskTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskTask.
     * @param {RiskTaskDeleteArgs} args - Arguments to delete one RiskTask.
     * @example
     * // Delete one RiskTask
     * const RiskTask = await prisma.riskTask.delete({
     *   where: {
     *     // ... filter to delete one RiskTask
     *   }
     * })
     * 
     */
    delete<T extends RiskTaskDeleteArgs>(args: SelectSubset<T, RiskTaskDeleteArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskTask.
     * @param {RiskTaskUpdateArgs} args - Arguments to update one RiskTask.
     * @example
     * // Update one RiskTask
     * const riskTask = await prisma.riskTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskTaskUpdateArgs>(args: SelectSubset<T, RiskTaskUpdateArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskTasks.
     * @param {RiskTaskDeleteManyArgs} args - Arguments to filter RiskTasks to delete.
     * @example
     * // Delete a few RiskTasks
     * const { count } = await prisma.riskTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskTaskDeleteManyArgs>(args?: SelectSubset<T, RiskTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskTasks
     * const riskTask = await prisma.riskTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskTaskUpdateManyArgs>(args: SelectSubset<T, RiskTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskTasks and returns the data updated in the database.
     * @param {RiskTaskUpdateManyAndReturnArgs} args - Arguments to update many RiskTasks.
     * @example
     * // Update many RiskTasks
     * const riskTask = await prisma.riskTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskTasks and only return the `id`
     * const riskTaskWithIdOnly = await prisma.riskTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskTask.
     * @param {RiskTaskUpsertArgs} args - Arguments to update or create a RiskTask.
     * @example
     * // Update or create a RiskTask
     * const riskTask = await prisma.riskTask.upsert({
     *   create: {
     *     // ... data to create a RiskTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskTask we want to update
     *   }
     * })
     */
    upsert<T extends RiskTaskUpsertArgs>(args: SelectSubset<T, RiskTaskUpsertArgs<ExtArgs>>): Prisma__RiskTaskClient<$Result.GetResult<Prisma.$RiskTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskCountArgs} args - Arguments to filter RiskTasks to count.
     * @example
     * // Count the number of RiskTasks
     * const count = await prisma.riskTask.count({
     *   where: {
     *     // ... the filter for the RiskTasks we want to count
     *   }
     * })
    **/
    count<T extends RiskTaskCountArgs>(
      args?: Subset<T, RiskTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiskTaskAggregateArgs>(args: Subset<T, RiskTaskAggregateArgs>): Prisma.PrismaPromise<GetRiskTaskAggregateType<T>>

    /**
     * Group by RiskTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiskTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskTaskGroupByArgs['orderBy'] }
        : { orderBy?: RiskTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskTask model
   */
  readonly fields: RiskTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    position<T extends RiskTask$positionArgs<ExtArgs> = {}>(args?: Subset<T, RiskTask$positionArgs<ExtArgs>>): Prisma__RiskPositionClient<$Result.GetResult<Prisma.$RiskPositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskTask model
   */
  interface RiskTaskFieldRefs {
    readonly id: FieldRef<"RiskTask", 'String'>
    readonly type: FieldRef<"RiskTask", 'String'>
    readonly positionId: FieldRef<"RiskTask", 'String'>
    readonly status: FieldRef<"RiskTask", 'String'>
    readonly attempts: FieldRef<"RiskTask", 'Int'>
    readonly lastError: FieldRef<"RiskTask", 'String'>
    readonly nextRunAt: FieldRef<"RiskTask", 'DateTime'>
    readonly createdAt: FieldRef<"RiskTask", 'DateTime'>
    readonly updatedAt: FieldRef<"RiskTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskTask findUnique
   */
  export type RiskTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * Filter, which RiskTask to fetch.
     */
    where: RiskTaskWhereUniqueInput
  }

  /**
   * RiskTask findUniqueOrThrow
   */
  export type RiskTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * Filter, which RiskTask to fetch.
     */
    where: RiskTaskWhereUniqueInput
  }

  /**
   * RiskTask findFirst
   */
  export type RiskTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * Filter, which RiskTask to fetch.
     */
    where?: RiskTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskTasks to fetch.
     */
    orderBy?: RiskTaskOrderByWithRelationInput | RiskTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskTasks.
     */
    cursor?: RiskTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskTasks.
     */
    distinct?: RiskTaskScalarFieldEnum | RiskTaskScalarFieldEnum[]
  }

  /**
   * RiskTask findFirstOrThrow
   */
  export type RiskTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * Filter, which RiskTask to fetch.
     */
    where?: RiskTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskTasks to fetch.
     */
    orderBy?: RiskTaskOrderByWithRelationInput | RiskTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskTasks.
     */
    cursor?: RiskTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskTasks.
     */
    distinct?: RiskTaskScalarFieldEnum | RiskTaskScalarFieldEnum[]
  }

  /**
   * RiskTask findMany
   */
  export type RiskTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * Filter, which RiskTasks to fetch.
     */
    where?: RiskTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskTasks to fetch.
     */
    orderBy?: RiskTaskOrderByWithRelationInput | RiskTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskTasks.
     */
    cursor?: RiskTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskTasks.
     */
    distinct?: RiskTaskScalarFieldEnum | RiskTaskScalarFieldEnum[]
  }

  /**
   * RiskTask create
   */
  export type RiskTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskTask.
     */
    data: XOR<RiskTaskCreateInput, RiskTaskUncheckedCreateInput>
  }

  /**
   * RiskTask createMany
   */
  export type RiskTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskTasks.
     */
    data: RiskTaskCreateManyInput | RiskTaskCreateManyInput[]
  }

  /**
   * RiskTask createManyAndReturn
   */
  export type RiskTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * The data used to create many RiskTasks.
     */
    data: RiskTaskCreateManyInput | RiskTaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskTask update
   */
  export type RiskTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskTask.
     */
    data: XOR<RiskTaskUpdateInput, RiskTaskUncheckedUpdateInput>
    /**
     * Choose, which RiskTask to update.
     */
    where: RiskTaskWhereUniqueInput
  }

  /**
   * RiskTask updateMany
   */
  export type RiskTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskTasks.
     */
    data: XOR<RiskTaskUpdateManyMutationInput, RiskTaskUncheckedUpdateManyInput>
    /**
     * Filter which RiskTasks to update
     */
    where?: RiskTaskWhereInput
    /**
     * Limit how many RiskTasks to update.
     */
    limit?: number
  }

  /**
   * RiskTask updateManyAndReturn
   */
  export type RiskTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * The data used to update RiskTasks.
     */
    data: XOR<RiskTaskUpdateManyMutationInput, RiskTaskUncheckedUpdateManyInput>
    /**
     * Filter which RiskTasks to update
     */
    where?: RiskTaskWhereInput
    /**
     * Limit how many RiskTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskTask upsert
   */
  export type RiskTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskTask to update in case it exists.
     */
    where: RiskTaskWhereUniqueInput
    /**
     * In case the RiskTask found by the `where` argument doesn't exist, create a new RiskTask with this data.
     */
    create: XOR<RiskTaskCreateInput, RiskTaskUncheckedCreateInput>
    /**
     * In case the RiskTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskTaskUpdateInput, RiskTaskUncheckedUpdateInput>
  }

  /**
   * RiskTask delete
   */
  export type RiskTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
    /**
     * Filter which RiskTask to delete.
     */
    where: RiskTaskWhereUniqueInput
  }

  /**
   * RiskTask deleteMany
   */
  export type RiskTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskTasks to delete
     */
    where?: RiskTaskWhereInput
    /**
     * Limit how many RiskTasks to delete.
     */
    limit?: number
  }

  /**
   * RiskTask.position
   */
  export type RiskTask$positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskPosition
     */
    select?: RiskPositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskPosition
     */
    omit?: RiskPositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskPositionInclude<ExtArgs> | null
    where?: RiskPositionWhereInput
  }

  /**
   * RiskTask without action
   */
  export type RiskTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskTask
     */
    select?: RiskTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskTask
     */
    omit?: RiskTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskTaskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventScalarFieldEnum: {
    id: 'id',
    sport: 'sport',
    league: 'league',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    startTime: 'startTime',
    status: 'status',
    sxEventId: 'sxEventId',
    polyEventId: 'polyEventId',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const MarketScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    platform: 'platform',
    externalId: 'externalId',
    startTime: 'startTime',
    betType: 'betType',
    line: 'line',
    mainLine: 'mainLine',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type MarketScalarFieldEnum = (typeof MarketScalarFieldEnum)[keyof typeof MarketScalarFieldEnum]


  export const OutcomeScalarFieldEnum: {
    id: 'id',
    marketId: 'marketId',
    label: 'label',
    externalId: 'externalId',
    currentOdds: 'currentOdds',
    liquidityDepth: 'liquidityDepth',
    liquidityLevels: 'liquidityLevels',
    lastUpdated: 'lastUpdated',
    canonicalBetId: 'canonicalBetId'
  };

  export type OutcomeScalarFieldEnum = (typeof OutcomeScalarFieldEnum)[keyof typeof OutcomeScalarFieldEnum]


  export const CanonicalBetScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    key: 'key',
    betType: 'betType',
    side: 'side',
    line: 'line',
    createdAt: 'createdAt'
  };

  export type CanonicalBetScalarFieldEnum = (typeof CanonicalBetScalarFieldEnum)[keyof typeof CanonicalBetScalarFieldEnum]


  export const TeamAliasScalarFieldEnum: {
    id: 'id',
    canonical: 'canonical',
    platform: 'platform',
    alias: 'alias',
    league: 'league'
  };

  export type TeamAliasScalarFieldEnum = (typeof TeamAliasScalarFieldEnum)[keyof typeof TeamAliasScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    marketId: 'marketId',
    outcomeId: 'outcomeId',
    side: 'side',
    requestedSize: 'requestedSize',
    executedSize: 'executedSize',
    requestedOdds: 'requestedOdds',
    fillOdds: 'fillOdds',
    platform: 'platform',
    txHash: 'txHash',
    status: 'status',
    failureReason: 'failureReason'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const BotConfigScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type BotConfigScalarFieldEnum = (typeof BotConfigScalarFieldEnum)[keyof typeof BotConfigScalarFieldEnum]


  export const PolymarketAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiKey: 'apiKey',
    secret: 'secret',
    passphrase: 'passphrase',
    privateKey: 'privateKey',
    funderAddress: 'funderAddress',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolymarketAccountScalarFieldEnum = (typeof PolymarketAccountScalarFieldEnum)[keyof typeof PolymarketAccountScalarFieldEnum]


  export const RiskPositionScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    outcomeId: 'outcomeId',
    tokenId: 'tokenId',
    title: 'title',
    sideLabel: 'sideLabel',
    avgEntryCents: 'avgEntryCents',
    sizeShares: 'sizeShares',
    costUsd: 'costUsd',
    highWaterCents: 'highWaterCents',
    stopLossPct: 'stopLossPct',
    source: 'source',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiskPositionScalarFieldEnum = (typeof RiskPositionScalarFieldEnum)[keyof typeof RiskPositionScalarFieldEnum]


  export const RiskAppliedClobTradeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type RiskAppliedClobTradeScalarFieldEnum = (typeof RiskAppliedClobTradeScalarFieldEnum)[keyof typeof RiskAppliedClobTradeScalarFieldEnum]


  export const RiskTaskScalarFieldEnum: {
    id: 'id',
    type: 'type',
    positionId: 'positionId',
    status: 'status',
    attempts: 'attempts',
    lastError: 'lastError',
    nextRunAt: 'nextRunAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiskTaskScalarFieldEnum = (typeof RiskTaskScalarFieldEnum)[keyof typeof RiskTaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    sport?: StringFilter<"Event"> | string
    league?: StringFilter<"Event"> | string
    homeTeam?: StringFilter<"Event"> | string
    awayTeam?: StringFilter<"Event"> | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    status?: StringFilter<"Event"> | string
    sxEventId?: StringNullableFilter<"Event"> | string | null
    polyEventId?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    markets?: MarketListRelationFilter
    canonicalBets?: CanonicalBetListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    sport?: SortOrder
    league?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    sxEventId?: SortOrderInput | SortOrder
    polyEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    markets?: MarketOrderByRelationAggregateInput
    canonicalBets?: CanonicalBetOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    sport?: StringFilter<"Event"> | string
    league?: StringFilter<"Event"> | string
    homeTeam?: StringFilter<"Event"> | string
    awayTeam?: StringFilter<"Event"> | string
    startTime?: DateTimeFilter<"Event"> | Date | string
    status?: StringFilter<"Event"> | string
    sxEventId?: StringNullableFilter<"Event"> | string | null
    polyEventId?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    markets?: MarketListRelationFilter
    canonicalBets?: CanonicalBetListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    sport?: SortOrder
    league?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    sxEventId?: SortOrderInput | SortOrder
    polyEventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    sport?: StringWithAggregatesFilter<"Event"> | string
    league?: StringWithAggregatesFilter<"Event"> | string
    homeTeam?: StringWithAggregatesFilter<"Event"> | string
    awayTeam?: StringWithAggregatesFilter<"Event"> | string
    startTime?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    status?: StringWithAggregatesFilter<"Event"> | string
    sxEventId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    polyEventId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type MarketWhereInput = {
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    id?: StringFilter<"Market"> | string
    eventId?: StringFilter<"Market"> | string
    platform?: StringFilter<"Market"> | string
    externalId?: StringFilter<"Market"> | string
    startTime?: DateTimeFilter<"Market"> | Date | string
    betType?: StringFilter<"Market"> | string
    line?: FloatNullableFilter<"Market"> | number | null
    mainLine?: BoolFilter<"Market"> | boolean
    status?: StringFilter<"Market"> | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    outcomes?: OutcomeListRelationFilter
    trades?: TradeListRelationFilter
  }

  export type MarketOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    startTime?: SortOrder
    betType?: SortOrder
    line?: SortOrderInput | SortOrder
    mainLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    outcomes?: OutcomeOrderByRelationAggregateInput
    trades?: TradeOrderByRelationAggregateInput
  }

  export type MarketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    platform_externalId?: MarketPlatformExternalIdCompoundUniqueInput
    AND?: MarketWhereInput | MarketWhereInput[]
    OR?: MarketWhereInput[]
    NOT?: MarketWhereInput | MarketWhereInput[]
    eventId?: StringFilter<"Market"> | string
    platform?: StringFilter<"Market"> | string
    externalId?: StringFilter<"Market"> | string
    startTime?: DateTimeFilter<"Market"> | Date | string
    betType?: StringFilter<"Market"> | string
    line?: FloatNullableFilter<"Market"> | number | null
    mainLine?: BoolFilter<"Market"> | boolean
    status?: StringFilter<"Market"> | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    outcomes?: OutcomeListRelationFilter
    trades?: TradeListRelationFilter
  }, "id" | "platform_externalId">

  export type MarketOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    startTime?: SortOrder
    betType?: SortOrder
    line?: SortOrderInput | SortOrder
    mainLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: MarketCountOrderByAggregateInput
    _avg?: MarketAvgOrderByAggregateInput
    _max?: MarketMaxOrderByAggregateInput
    _min?: MarketMinOrderByAggregateInput
    _sum?: MarketSumOrderByAggregateInput
  }

  export type MarketScalarWhereWithAggregatesInput = {
    AND?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    OR?: MarketScalarWhereWithAggregatesInput[]
    NOT?: MarketScalarWhereWithAggregatesInput | MarketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Market"> | string
    eventId?: StringWithAggregatesFilter<"Market"> | string
    platform?: StringWithAggregatesFilter<"Market"> | string
    externalId?: StringWithAggregatesFilter<"Market"> | string
    startTime?: DateTimeWithAggregatesFilter<"Market"> | Date | string
    betType?: StringWithAggregatesFilter<"Market"> | string
    line?: FloatNullableWithAggregatesFilter<"Market"> | number | null
    mainLine?: BoolWithAggregatesFilter<"Market"> | boolean
    status?: StringWithAggregatesFilter<"Market"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Market"> | Date | string
  }

  export type OutcomeWhereInput = {
    AND?: OutcomeWhereInput | OutcomeWhereInput[]
    OR?: OutcomeWhereInput[]
    NOT?: OutcomeWhereInput | OutcomeWhereInput[]
    id?: StringFilter<"Outcome"> | string
    marketId?: StringFilter<"Outcome"> | string
    label?: StringFilter<"Outcome"> | string
    externalId?: StringNullableFilter<"Outcome"> | string | null
    currentOdds?: FloatFilter<"Outcome"> | number
    liquidityDepth?: FloatFilter<"Outcome"> | number
    liquidityLevels?: StringNullableFilter<"Outcome"> | string | null
    lastUpdated?: DateTimeFilter<"Outcome"> | Date | string
    canonicalBetId?: StringNullableFilter<"Outcome"> | string | null
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    canonicalBet?: XOR<CanonicalBetNullableScalarRelationFilter, CanonicalBetWhereInput> | null
    trades?: TradeListRelationFilter
    riskPositions?: RiskPositionListRelationFilter
  }

  export type OutcomeOrderByWithRelationInput = {
    id?: SortOrder
    marketId?: SortOrder
    label?: SortOrder
    externalId?: SortOrderInput | SortOrder
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
    liquidityLevels?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    canonicalBetId?: SortOrderInput | SortOrder
    market?: MarketOrderByWithRelationInput
    canonicalBet?: CanonicalBetOrderByWithRelationInput
    trades?: TradeOrderByRelationAggregateInput
    riskPositions?: RiskPositionOrderByRelationAggregateInput
  }

  export type OutcomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutcomeWhereInput | OutcomeWhereInput[]
    OR?: OutcomeWhereInput[]
    NOT?: OutcomeWhereInput | OutcomeWhereInput[]
    marketId?: StringFilter<"Outcome"> | string
    label?: StringFilter<"Outcome"> | string
    externalId?: StringNullableFilter<"Outcome"> | string | null
    currentOdds?: FloatFilter<"Outcome"> | number
    liquidityDepth?: FloatFilter<"Outcome"> | number
    liquidityLevels?: StringNullableFilter<"Outcome"> | string | null
    lastUpdated?: DateTimeFilter<"Outcome"> | Date | string
    canonicalBetId?: StringNullableFilter<"Outcome"> | string | null
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    canonicalBet?: XOR<CanonicalBetNullableScalarRelationFilter, CanonicalBetWhereInput> | null
    trades?: TradeListRelationFilter
    riskPositions?: RiskPositionListRelationFilter
  }, "id">

  export type OutcomeOrderByWithAggregationInput = {
    id?: SortOrder
    marketId?: SortOrder
    label?: SortOrder
    externalId?: SortOrderInput | SortOrder
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
    liquidityLevels?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    canonicalBetId?: SortOrderInput | SortOrder
    _count?: OutcomeCountOrderByAggregateInput
    _avg?: OutcomeAvgOrderByAggregateInput
    _max?: OutcomeMaxOrderByAggregateInput
    _min?: OutcomeMinOrderByAggregateInput
    _sum?: OutcomeSumOrderByAggregateInput
  }

  export type OutcomeScalarWhereWithAggregatesInput = {
    AND?: OutcomeScalarWhereWithAggregatesInput | OutcomeScalarWhereWithAggregatesInput[]
    OR?: OutcomeScalarWhereWithAggregatesInput[]
    NOT?: OutcomeScalarWhereWithAggregatesInput | OutcomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outcome"> | string
    marketId?: StringWithAggregatesFilter<"Outcome"> | string
    label?: StringWithAggregatesFilter<"Outcome"> | string
    externalId?: StringNullableWithAggregatesFilter<"Outcome"> | string | null
    currentOdds?: FloatWithAggregatesFilter<"Outcome"> | number
    liquidityDepth?: FloatWithAggregatesFilter<"Outcome"> | number
    liquidityLevels?: StringNullableWithAggregatesFilter<"Outcome"> | string | null
    lastUpdated?: DateTimeWithAggregatesFilter<"Outcome"> | Date | string
    canonicalBetId?: StringNullableWithAggregatesFilter<"Outcome"> | string | null
  }

  export type CanonicalBetWhereInput = {
    AND?: CanonicalBetWhereInput | CanonicalBetWhereInput[]
    OR?: CanonicalBetWhereInput[]
    NOT?: CanonicalBetWhereInput | CanonicalBetWhereInput[]
    id?: StringFilter<"CanonicalBet"> | string
    eventId?: StringFilter<"CanonicalBet"> | string
    key?: StringFilter<"CanonicalBet"> | string
    betType?: StringFilter<"CanonicalBet"> | string
    side?: StringFilter<"CanonicalBet"> | string
    line?: FloatNullableFilter<"CanonicalBet"> | number | null
    createdAt?: DateTimeFilter<"CanonicalBet"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    outcomes?: OutcomeListRelationFilter
  }

  export type CanonicalBetOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    betType?: SortOrder
    side?: SortOrder
    line?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    outcomes?: OutcomeOrderByRelationAggregateInput
  }

  export type CanonicalBetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId_key?: CanonicalBetEventIdKeyCompoundUniqueInput
    AND?: CanonicalBetWhereInput | CanonicalBetWhereInput[]
    OR?: CanonicalBetWhereInput[]
    NOT?: CanonicalBetWhereInput | CanonicalBetWhereInput[]
    eventId?: StringFilter<"CanonicalBet"> | string
    key?: StringFilter<"CanonicalBet"> | string
    betType?: StringFilter<"CanonicalBet"> | string
    side?: StringFilter<"CanonicalBet"> | string
    line?: FloatNullableFilter<"CanonicalBet"> | number | null
    createdAt?: DateTimeFilter<"CanonicalBet"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    outcomes?: OutcomeListRelationFilter
  }, "id" | "eventId_key">

  export type CanonicalBetOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    betType?: SortOrder
    side?: SortOrder
    line?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CanonicalBetCountOrderByAggregateInput
    _avg?: CanonicalBetAvgOrderByAggregateInput
    _max?: CanonicalBetMaxOrderByAggregateInput
    _min?: CanonicalBetMinOrderByAggregateInput
    _sum?: CanonicalBetSumOrderByAggregateInput
  }

  export type CanonicalBetScalarWhereWithAggregatesInput = {
    AND?: CanonicalBetScalarWhereWithAggregatesInput | CanonicalBetScalarWhereWithAggregatesInput[]
    OR?: CanonicalBetScalarWhereWithAggregatesInput[]
    NOT?: CanonicalBetScalarWhereWithAggregatesInput | CanonicalBetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CanonicalBet"> | string
    eventId?: StringWithAggregatesFilter<"CanonicalBet"> | string
    key?: StringWithAggregatesFilter<"CanonicalBet"> | string
    betType?: StringWithAggregatesFilter<"CanonicalBet"> | string
    side?: StringWithAggregatesFilter<"CanonicalBet"> | string
    line?: FloatNullableWithAggregatesFilter<"CanonicalBet"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CanonicalBet"> | Date | string
  }

  export type TeamAliasWhereInput = {
    AND?: TeamAliasWhereInput | TeamAliasWhereInput[]
    OR?: TeamAliasWhereInput[]
    NOT?: TeamAliasWhereInput | TeamAliasWhereInput[]
    id?: StringFilter<"TeamAlias"> | string
    canonical?: StringFilter<"TeamAlias"> | string
    platform?: StringFilter<"TeamAlias"> | string
    alias?: StringFilter<"TeamAlias"> | string
    league?: StringFilter<"TeamAlias"> | string
  }

  export type TeamAliasOrderByWithRelationInput = {
    id?: SortOrder
    canonical?: SortOrder
    platform?: SortOrder
    alias?: SortOrder
    league?: SortOrder
  }

  export type TeamAliasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    platform_alias_league?: TeamAliasPlatformAliasLeagueCompoundUniqueInput
    AND?: TeamAliasWhereInput | TeamAliasWhereInput[]
    OR?: TeamAliasWhereInput[]
    NOT?: TeamAliasWhereInput | TeamAliasWhereInput[]
    canonical?: StringFilter<"TeamAlias"> | string
    platform?: StringFilter<"TeamAlias"> | string
    alias?: StringFilter<"TeamAlias"> | string
    league?: StringFilter<"TeamAlias"> | string
  }, "id" | "platform_alias_league">

  export type TeamAliasOrderByWithAggregationInput = {
    id?: SortOrder
    canonical?: SortOrder
    platform?: SortOrder
    alias?: SortOrder
    league?: SortOrder
    _count?: TeamAliasCountOrderByAggregateInput
    _max?: TeamAliasMaxOrderByAggregateInput
    _min?: TeamAliasMinOrderByAggregateInput
  }

  export type TeamAliasScalarWhereWithAggregatesInput = {
    AND?: TeamAliasScalarWhereWithAggregatesInput | TeamAliasScalarWhereWithAggregatesInput[]
    OR?: TeamAliasScalarWhereWithAggregatesInput[]
    NOT?: TeamAliasScalarWhereWithAggregatesInput | TeamAliasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamAlias"> | string
    canonical?: StringWithAggregatesFilter<"TeamAlias"> | string
    platform?: StringWithAggregatesFilter<"TeamAlias"> | string
    alias?: StringWithAggregatesFilter<"TeamAlias"> | string
    league?: StringWithAggregatesFilter<"TeamAlias"> | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    marketId?: StringFilter<"Trade"> | string
    outcomeId?: StringFilter<"Trade"> | string
    side?: StringFilter<"Trade"> | string
    requestedSize?: FloatFilter<"Trade"> | number
    executedSize?: FloatNullableFilter<"Trade"> | number | null
    requestedOdds?: FloatFilter<"Trade"> | number
    fillOdds?: FloatNullableFilter<"Trade"> | number | null
    platform?: StringFilter<"Trade"> | string
    txHash?: StringNullableFilter<"Trade"> | string | null
    status?: StringFilter<"Trade"> | string
    failureReason?: StringNullableFilter<"Trade"> | string | null
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    outcome?: XOR<OutcomeScalarRelationFilter, OutcomeWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    marketId?: SortOrder
    outcomeId?: SortOrder
    side?: SortOrder
    requestedSize?: SortOrder
    executedSize?: SortOrderInput | SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrderInput | SortOrder
    platform?: SortOrder
    txHash?: SortOrderInput | SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    market?: MarketOrderByWithRelationInput
    outcome?: OutcomeOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    marketId?: StringFilter<"Trade"> | string
    outcomeId?: StringFilter<"Trade"> | string
    side?: StringFilter<"Trade"> | string
    requestedSize?: FloatFilter<"Trade"> | number
    executedSize?: FloatNullableFilter<"Trade"> | number | null
    requestedOdds?: FloatFilter<"Trade"> | number
    fillOdds?: FloatNullableFilter<"Trade"> | number | null
    platform?: StringFilter<"Trade"> | string
    txHash?: StringNullableFilter<"Trade"> | string | null
    status?: StringFilter<"Trade"> | string
    failureReason?: StringNullableFilter<"Trade"> | string | null
    market?: XOR<MarketScalarRelationFilter, MarketWhereInput>
    outcome?: XOR<OutcomeScalarRelationFilter, OutcomeWhereInput>
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    marketId?: SortOrder
    outcomeId?: SortOrder
    side?: SortOrder
    requestedSize?: SortOrder
    executedSize?: SortOrderInput | SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrderInput | SortOrder
    platform?: SortOrder
    txHash?: SortOrderInput | SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    marketId?: StringWithAggregatesFilter<"Trade"> | string
    outcomeId?: StringWithAggregatesFilter<"Trade"> | string
    side?: StringWithAggregatesFilter<"Trade"> | string
    requestedSize?: FloatWithAggregatesFilter<"Trade"> | number
    executedSize?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    requestedOdds?: FloatWithAggregatesFilter<"Trade"> | number
    fillOdds?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    platform?: StringWithAggregatesFilter<"Trade"> | string
    txHash?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    status?: StringWithAggregatesFilter<"Trade"> | string
    failureReason?: StringNullableWithAggregatesFilter<"Trade"> | string | null
  }

  export type BotConfigWhereInput = {
    AND?: BotConfigWhereInput | BotConfigWhereInput[]
    OR?: BotConfigWhereInput[]
    NOT?: BotConfigWhereInput | BotConfigWhereInput[]
    key?: StringFilter<"BotConfig"> | string
    value?: StringFilter<"BotConfig"> | string
  }

  export type BotConfigOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type BotConfigWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: BotConfigWhereInput | BotConfigWhereInput[]
    OR?: BotConfigWhereInput[]
    NOT?: BotConfigWhereInput | BotConfigWhereInput[]
    value?: StringFilter<"BotConfig"> | string
  }, "key">

  export type BotConfigOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: BotConfigCountOrderByAggregateInput
    _max?: BotConfigMaxOrderByAggregateInput
    _min?: BotConfigMinOrderByAggregateInput
  }

  export type BotConfigScalarWhereWithAggregatesInput = {
    AND?: BotConfigScalarWhereWithAggregatesInput | BotConfigScalarWhereWithAggregatesInput[]
    OR?: BotConfigScalarWhereWithAggregatesInput[]
    NOT?: BotConfigScalarWhereWithAggregatesInput | BotConfigScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"BotConfig"> | string
    value?: StringWithAggregatesFilter<"BotConfig"> | string
  }

  export type PolymarketAccountWhereInput = {
    AND?: PolymarketAccountWhereInput | PolymarketAccountWhereInput[]
    OR?: PolymarketAccountWhereInput[]
    NOT?: PolymarketAccountWhereInput | PolymarketAccountWhereInput[]
    id?: StringFilter<"PolymarketAccount"> | string
    name?: StringFilter<"PolymarketAccount"> | string
    apiKey?: StringFilter<"PolymarketAccount"> | string
    secret?: StringFilter<"PolymarketAccount"> | string
    passphrase?: StringFilter<"PolymarketAccount"> | string
    privateKey?: StringFilter<"PolymarketAccount"> | string
    funderAddress?: StringFilter<"PolymarketAccount"> | string
    isActive?: BoolFilter<"PolymarketAccount"> | boolean
    createdAt?: DateTimeFilter<"PolymarketAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PolymarketAccount"> | Date | string
  }

  export type PolymarketAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secret?: SortOrder
    passphrase?: SortOrder
    privateKey?: SortOrder
    funderAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolymarketAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PolymarketAccountWhereInput | PolymarketAccountWhereInput[]
    OR?: PolymarketAccountWhereInput[]
    NOT?: PolymarketAccountWhereInput | PolymarketAccountWhereInput[]
    name?: StringFilter<"PolymarketAccount"> | string
    apiKey?: StringFilter<"PolymarketAccount"> | string
    secret?: StringFilter<"PolymarketAccount"> | string
    passphrase?: StringFilter<"PolymarketAccount"> | string
    privateKey?: StringFilter<"PolymarketAccount"> | string
    funderAddress?: StringFilter<"PolymarketAccount"> | string
    isActive?: BoolFilter<"PolymarketAccount"> | boolean
    createdAt?: DateTimeFilter<"PolymarketAccount"> | Date | string
    updatedAt?: DateTimeFilter<"PolymarketAccount"> | Date | string
  }, "id">

  export type PolymarketAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secret?: SortOrder
    passphrase?: SortOrder
    privateKey?: SortOrder
    funderAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolymarketAccountCountOrderByAggregateInput
    _max?: PolymarketAccountMaxOrderByAggregateInput
    _min?: PolymarketAccountMinOrderByAggregateInput
  }

  export type PolymarketAccountScalarWhereWithAggregatesInput = {
    AND?: PolymarketAccountScalarWhereWithAggregatesInput | PolymarketAccountScalarWhereWithAggregatesInput[]
    OR?: PolymarketAccountScalarWhereWithAggregatesInput[]
    NOT?: PolymarketAccountScalarWhereWithAggregatesInput | PolymarketAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    name?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    apiKey?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    secret?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    passphrase?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    privateKey?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    funderAddress?: StringWithAggregatesFilter<"PolymarketAccount"> | string
    isActive?: BoolWithAggregatesFilter<"PolymarketAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PolymarketAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PolymarketAccount"> | Date | string
  }

  export type RiskPositionWhereInput = {
    AND?: RiskPositionWhereInput | RiskPositionWhereInput[]
    OR?: RiskPositionWhereInput[]
    NOT?: RiskPositionWhereInput | RiskPositionWhereInput[]
    id?: StringFilter<"RiskPosition"> | string
    platform?: StringFilter<"RiskPosition"> | string
    outcomeId?: StringNullableFilter<"RiskPosition"> | string | null
    tokenId?: StringFilter<"RiskPosition"> | string
    title?: StringFilter<"RiskPosition"> | string
    sideLabel?: StringFilter<"RiskPosition"> | string
    avgEntryCents?: FloatFilter<"RiskPosition"> | number
    sizeShares?: FloatFilter<"RiskPosition"> | number
    costUsd?: FloatFilter<"RiskPosition"> | number
    highWaterCents?: FloatFilter<"RiskPosition"> | number
    stopLossPct?: FloatFilter<"RiskPosition"> | number
    source?: StringFilter<"RiskPosition"> | string
    status?: StringFilter<"RiskPosition"> | string
    createdAt?: DateTimeFilter<"RiskPosition"> | Date | string
    updatedAt?: DateTimeFilter<"RiskPosition"> | Date | string
    outcome?: XOR<OutcomeNullableScalarRelationFilter, OutcomeWhereInput> | null
    tasks?: RiskTaskListRelationFilter
  }

  export type RiskPositionOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    outcomeId?: SortOrderInput | SortOrder
    tokenId?: SortOrder
    title?: SortOrder
    sideLabel?: SortOrder
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outcome?: OutcomeOrderByWithRelationInput
    tasks?: RiskTaskOrderByRelationAggregateInput
  }

  export type RiskPositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskPositionWhereInput | RiskPositionWhereInput[]
    OR?: RiskPositionWhereInput[]
    NOT?: RiskPositionWhereInput | RiskPositionWhereInput[]
    platform?: StringFilter<"RiskPosition"> | string
    outcomeId?: StringNullableFilter<"RiskPosition"> | string | null
    tokenId?: StringFilter<"RiskPosition"> | string
    title?: StringFilter<"RiskPosition"> | string
    sideLabel?: StringFilter<"RiskPosition"> | string
    avgEntryCents?: FloatFilter<"RiskPosition"> | number
    sizeShares?: FloatFilter<"RiskPosition"> | number
    costUsd?: FloatFilter<"RiskPosition"> | number
    highWaterCents?: FloatFilter<"RiskPosition"> | number
    stopLossPct?: FloatFilter<"RiskPosition"> | number
    source?: StringFilter<"RiskPosition"> | string
    status?: StringFilter<"RiskPosition"> | string
    createdAt?: DateTimeFilter<"RiskPosition"> | Date | string
    updatedAt?: DateTimeFilter<"RiskPosition"> | Date | string
    outcome?: XOR<OutcomeNullableScalarRelationFilter, OutcomeWhereInput> | null
    tasks?: RiskTaskListRelationFilter
  }, "id">

  export type RiskPositionOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    outcomeId?: SortOrderInput | SortOrder
    tokenId?: SortOrder
    title?: SortOrder
    sideLabel?: SortOrder
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskPositionCountOrderByAggregateInput
    _avg?: RiskPositionAvgOrderByAggregateInput
    _max?: RiskPositionMaxOrderByAggregateInput
    _min?: RiskPositionMinOrderByAggregateInput
    _sum?: RiskPositionSumOrderByAggregateInput
  }

  export type RiskPositionScalarWhereWithAggregatesInput = {
    AND?: RiskPositionScalarWhereWithAggregatesInput | RiskPositionScalarWhereWithAggregatesInput[]
    OR?: RiskPositionScalarWhereWithAggregatesInput[]
    NOT?: RiskPositionScalarWhereWithAggregatesInput | RiskPositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskPosition"> | string
    platform?: StringWithAggregatesFilter<"RiskPosition"> | string
    outcomeId?: StringNullableWithAggregatesFilter<"RiskPosition"> | string | null
    tokenId?: StringWithAggregatesFilter<"RiskPosition"> | string
    title?: StringWithAggregatesFilter<"RiskPosition"> | string
    sideLabel?: StringWithAggregatesFilter<"RiskPosition"> | string
    avgEntryCents?: FloatWithAggregatesFilter<"RiskPosition"> | number
    sizeShares?: FloatWithAggregatesFilter<"RiskPosition"> | number
    costUsd?: FloatWithAggregatesFilter<"RiskPosition"> | number
    highWaterCents?: FloatWithAggregatesFilter<"RiskPosition"> | number
    stopLossPct?: FloatWithAggregatesFilter<"RiskPosition"> | number
    source?: StringWithAggregatesFilter<"RiskPosition"> | string
    status?: StringWithAggregatesFilter<"RiskPosition"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RiskPosition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RiskPosition"> | Date | string
  }

  export type RiskAppliedClobTradeWhereInput = {
    AND?: RiskAppliedClobTradeWhereInput | RiskAppliedClobTradeWhereInput[]
    OR?: RiskAppliedClobTradeWhereInput[]
    NOT?: RiskAppliedClobTradeWhereInput | RiskAppliedClobTradeWhereInput[]
    id?: StringFilter<"RiskAppliedClobTrade"> | string
    createdAt?: DateTimeFilter<"RiskAppliedClobTrade"> | Date | string
  }

  export type RiskAppliedClobTradeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAppliedClobTradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskAppliedClobTradeWhereInput | RiskAppliedClobTradeWhereInput[]
    OR?: RiskAppliedClobTradeWhereInput[]
    NOT?: RiskAppliedClobTradeWhereInput | RiskAppliedClobTradeWhereInput[]
    createdAt?: DateTimeFilter<"RiskAppliedClobTrade"> | Date | string
  }, "id">

  export type RiskAppliedClobTradeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: RiskAppliedClobTradeCountOrderByAggregateInput
    _max?: RiskAppliedClobTradeMaxOrderByAggregateInput
    _min?: RiskAppliedClobTradeMinOrderByAggregateInput
  }

  export type RiskAppliedClobTradeScalarWhereWithAggregatesInput = {
    AND?: RiskAppliedClobTradeScalarWhereWithAggregatesInput | RiskAppliedClobTradeScalarWhereWithAggregatesInput[]
    OR?: RiskAppliedClobTradeScalarWhereWithAggregatesInput[]
    NOT?: RiskAppliedClobTradeScalarWhereWithAggregatesInput | RiskAppliedClobTradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskAppliedClobTrade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RiskAppliedClobTrade"> | Date | string
  }

  export type RiskTaskWhereInput = {
    AND?: RiskTaskWhereInput | RiskTaskWhereInput[]
    OR?: RiskTaskWhereInput[]
    NOT?: RiskTaskWhereInput | RiskTaskWhereInput[]
    id?: StringFilter<"RiskTask"> | string
    type?: StringFilter<"RiskTask"> | string
    positionId?: StringNullableFilter<"RiskTask"> | string | null
    status?: StringFilter<"RiskTask"> | string
    attempts?: IntFilter<"RiskTask"> | number
    lastError?: StringNullableFilter<"RiskTask"> | string | null
    nextRunAt?: DateTimeFilter<"RiskTask"> | Date | string
    createdAt?: DateTimeFilter<"RiskTask"> | Date | string
    updatedAt?: DateTimeFilter<"RiskTask"> | Date | string
    position?: XOR<RiskPositionNullableScalarRelationFilter, RiskPositionWhereInput> | null
  }

  export type RiskTaskOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    positionId?: SortOrderInput | SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: RiskPositionOrderByWithRelationInput
  }

  export type RiskTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RiskTaskWhereInput | RiskTaskWhereInput[]
    OR?: RiskTaskWhereInput[]
    NOT?: RiskTaskWhereInput | RiskTaskWhereInput[]
    type?: StringFilter<"RiskTask"> | string
    positionId?: StringNullableFilter<"RiskTask"> | string | null
    status?: StringFilter<"RiskTask"> | string
    attempts?: IntFilter<"RiskTask"> | number
    lastError?: StringNullableFilter<"RiskTask"> | string | null
    nextRunAt?: DateTimeFilter<"RiskTask"> | Date | string
    createdAt?: DateTimeFilter<"RiskTask"> | Date | string
    updatedAt?: DateTimeFilter<"RiskTask"> | Date | string
    position?: XOR<RiskPositionNullableScalarRelationFilter, RiskPositionWhereInput> | null
  }, "id">

  export type RiskTaskOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    positionId?: SortOrderInput | SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrderInput | SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskTaskCountOrderByAggregateInput
    _avg?: RiskTaskAvgOrderByAggregateInput
    _max?: RiskTaskMaxOrderByAggregateInput
    _min?: RiskTaskMinOrderByAggregateInput
    _sum?: RiskTaskSumOrderByAggregateInput
  }

  export type RiskTaskScalarWhereWithAggregatesInput = {
    AND?: RiskTaskScalarWhereWithAggregatesInput | RiskTaskScalarWhereWithAggregatesInput[]
    OR?: RiskTaskScalarWhereWithAggregatesInput[]
    NOT?: RiskTaskScalarWhereWithAggregatesInput | RiskTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskTask"> | string
    type?: StringWithAggregatesFilter<"RiskTask"> | string
    positionId?: StringNullableWithAggregatesFilter<"RiskTask"> | string | null
    status?: StringWithAggregatesFilter<"RiskTask"> | string
    attempts?: IntWithAggregatesFilter<"RiskTask"> | number
    lastError?: StringNullableWithAggregatesFilter<"RiskTask"> | string | null
    nextRunAt?: DateTimeWithAggregatesFilter<"RiskTask"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RiskTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RiskTask"> | Date | string
  }

  export type EventCreateInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
    markets?: MarketCreateNestedManyWithoutEventInput
    canonicalBets?: CanonicalBetCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
    canonicalBets?: CanonicalBetUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUpdateManyWithoutEventNestedInput
    canonicalBets?: CanonicalBetUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
    canonicalBets?: CanonicalBetUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateInput = {
    id?: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutMarketsInput
    outcomes?: OutcomeCreateNestedManyWithoutMarketInput
    trades?: TradeCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateInput = {
    id?: string
    eventId: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutMarketInput
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutMarketsNestedInput
    outcomes?: OutcomeUpdateManyWithoutMarketNestedInput
    trades?: TradeUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutMarketNestedInput
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketCreateManyInput = {
    id?: string
    eventId: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type MarketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    market: MarketCreateNestedOneWithoutOutcomesInput
    canonicalBet?: CanonicalBetCreateNestedOneWithoutOutcomesInput
    trades?: TradeCreateNestedManyWithoutOutcomeInput
    riskPositions?: RiskPositionCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeUncheckedCreateInput = {
    id?: string
    marketId: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBetId?: string | null
    trades?: TradeUncheckedCreateNestedManyWithoutOutcomeInput
    riskPositions?: RiskPositionUncheckedCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutOutcomesNestedInput
    canonicalBet?: CanonicalBetUpdateOneWithoutOutcomesNestedInput
    trades?: TradeUpdateManyWithoutOutcomeNestedInput
    riskPositions?: RiskPositionUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBetId?: NullableStringFieldUpdateOperationsInput | string | null
    trades?: TradeUncheckedUpdateManyWithoutOutcomeNestedInput
    riskPositions?: RiskPositionUncheckedUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeCreateManyInput = {
    id?: string
    marketId: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBetId?: string | null
  }

  export type OutcomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CanonicalBetCreateInput = {
    id?: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutCanonicalBetsInput
    outcomes?: OutcomeCreateNestedManyWithoutCanonicalBetInput
  }

  export type CanonicalBetUncheckedCreateInput = {
    id?: string
    eventId: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutCanonicalBetInput
  }

  export type CanonicalBetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutCanonicalBetsNestedInput
    outcomes?: OutcomeUpdateManyWithoutCanonicalBetNestedInput
  }

  export type CanonicalBetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutCanonicalBetNestedInput
  }

  export type CanonicalBetCreateManyInput = {
    id?: string
    eventId: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
  }

  export type CanonicalBetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanonicalBetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamAliasCreateInput = {
    id?: string
    canonical: string
    platform: string
    alias: string
    league: string
  }

  export type TeamAliasUncheckedCreateInput = {
    id?: string
    canonical: string
    platform: string
    alias: string
    league: string
  }

  export type TeamAliasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonical?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
  }

  export type TeamAliasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonical?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
  }

  export type TeamAliasCreateManyInput = {
    id?: string
    canonical: string
    platform: string
    alias: string
    league: string
  }

  export type TeamAliasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonical?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
  }

  export type TeamAliasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    canonical?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
  }

  export type TradeCreateInput = {
    id?: string
    createdAt?: Date | string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
    market: MarketCreateNestedOneWithoutTradesInput
    outcome: OutcomeCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    marketId: string
    outcomeId: string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    market?: MarketUpdateOneRequiredWithoutTradesNestedInput
    outcome?: OutcomeUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketId?: StringFieldUpdateOperationsInput | string
    outcomeId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TradeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    marketId: string
    outcomeId: string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketId?: StringFieldUpdateOperationsInput | string
    outcomeId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BotConfigCreateInput = {
    key: string
    value: string
  }

  export type BotConfigUncheckedCreateInput = {
    key: string
    value: string
  }

  export type BotConfigUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type BotConfigUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type BotConfigCreateManyInput = {
    key: string
    value: string
  }

  export type BotConfigUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type BotConfigUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type PolymarketAccountCreateInput = {
    id?: string
    name: string
    apiKey: string
    secret: string
    passphrase: string
    privateKey: string
    funderAddress: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolymarketAccountUncheckedCreateInput = {
    id?: string
    name: string
    apiKey: string
    secret: string
    passphrase: string
    privateKey: string
    funderAddress: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolymarketAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    passphrase?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    funderAddress?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolymarketAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    passphrase?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    funderAddress?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolymarketAccountCreateManyInput = {
    id?: string
    name: string
    apiKey: string
    secret: string
    passphrase: string
    privateKey: string
    funderAddress: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolymarketAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    passphrase?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    funderAddress?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolymarketAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: StringFieldUpdateOperationsInput | string
    secret?: StringFieldUpdateOperationsInput | string
    passphrase?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    funderAddress?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskPositionCreateInput = {
    id?: string
    platform?: string
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outcome?: OutcomeCreateNestedOneWithoutRiskPositionsInput
    tasks?: RiskTaskCreateNestedManyWithoutPositionInput
  }

  export type RiskPositionUncheckedCreateInput = {
    id?: string
    platform?: string
    outcomeId?: string | null
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: RiskTaskUncheckedCreateNestedManyWithoutPositionInput
  }

  export type RiskPositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: OutcomeUpdateOneWithoutRiskPositionsNestedInput
    tasks?: RiskTaskUpdateManyWithoutPositionNestedInput
  }

  export type RiskPositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    outcomeId?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: RiskTaskUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type RiskPositionCreateManyInput = {
    id?: string
    platform?: string
    outcomeId?: string | null
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskPositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskPositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    outcomeId?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAppliedClobTradeCreateInput = {
    id: string
    createdAt?: Date | string
  }

  export type RiskAppliedClobTradeUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
  }

  export type RiskAppliedClobTradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAppliedClobTradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAppliedClobTradeCreateManyInput = {
    id: string
    createdAt?: Date | string
  }

  export type RiskAppliedClobTradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskAppliedClobTradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskTaskCreateInput = {
    id?: string
    type: string
    status?: string
    attempts?: number
    lastError?: string | null
    nextRunAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: RiskPositionCreateNestedOneWithoutTasksInput
  }

  export type RiskTaskUncheckedCreateInput = {
    id?: string
    type: string
    positionId?: string | null
    status?: string
    attempts?: number
    lastError?: string | null
    nextRunAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: RiskPositionUpdateOneWithoutTasksNestedInput
  }

  export type RiskTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskTaskCreateManyInput = {
    id?: string
    type: string
    positionId?: string | null
    status?: string
    attempts?: number
    lastError?: string | null
    nextRunAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MarketListRelationFilter = {
    every?: MarketWhereInput
    some?: MarketWhereInput
    none?: MarketWhereInput
  }

  export type CanonicalBetListRelationFilter = {
    every?: CanonicalBetWhereInput
    some?: CanonicalBetWhereInput
    none?: CanonicalBetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CanonicalBetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    sport?: SortOrder
    league?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    sxEventId?: SortOrder
    polyEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    sport?: SortOrder
    league?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    sxEventId?: SortOrder
    polyEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    sport?: SortOrder
    league?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    startTime?: SortOrder
    status?: SortOrder
    sxEventId?: SortOrder
    polyEventId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type OutcomeListRelationFilter = {
    every?: OutcomeWhereInput
    some?: OutcomeWhereInput
    none?: OutcomeWhereInput
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type OutcomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarketPlatformExternalIdCompoundUniqueInput = {
    platform: string
    externalId: string
  }

  export type MarketCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    startTime?: SortOrder
    betType?: SortOrder
    line?: SortOrder
    mainLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketAvgOrderByAggregateInput = {
    line?: SortOrder
  }

  export type MarketMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    startTime?: SortOrder
    betType?: SortOrder
    line?: SortOrder
    mainLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    platform?: SortOrder
    externalId?: SortOrder
    startTime?: SortOrder
    betType?: SortOrder
    line?: SortOrder
    mainLine?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketSumOrderByAggregateInput = {
    line?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MarketScalarRelationFilter = {
    is?: MarketWhereInput
    isNot?: MarketWhereInput
  }

  export type CanonicalBetNullableScalarRelationFilter = {
    is?: CanonicalBetWhereInput | null
    isNot?: CanonicalBetWhereInput | null
  }

  export type RiskPositionListRelationFilter = {
    every?: RiskPositionWhereInput
    some?: RiskPositionWhereInput
    none?: RiskPositionWhereInput
  }

  export type RiskPositionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutcomeCountOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    label?: SortOrder
    externalId?: SortOrder
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
    liquidityLevels?: SortOrder
    lastUpdated?: SortOrder
    canonicalBetId?: SortOrder
  }

  export type OutcomeAvgOrderByAggregateInput = {
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
  }

  export type OutcomeMaxOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    label?: SortOrder
    externalId?: SortOrder
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
    liquidityLevels?: SortOrder
    lastUpdated?: SortOrder
    canonicalBetId?: SortOrder
  }

  export type OutcomeMinOrderByAggregateInput = {
    id?: SortOrder
    marketId?: SortOrder
    label?: SortOrder
    externalId?: SortOrder
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
    liquidityLevels?: SortOrder
    lastUpdated?: SortOrder
    canonicalBetId?: SortOrder
  }

  export type OutcomeSumOrderByAggregateInput = {
    currentOdds?: SortOrder
    liquidityDepth?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CanonicalBetEventIdKeyCompoundUniqueInput = {
    eventId: string
    key: string
  }

  export type CanonicalBetCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    betType?: SortOrder
    side?: SortOrder
    line?: SortOrder
    createdAt?: SortOrder
  }

  export type CanonicalBetAvgOrderByAggregateInput = {
    line?: SortOrder
  }

  export type CanonicalBetMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    betType?: SortOrder
    side?: SortOrder
    line?: SortOrder
    createdAt?: SortOrder
  }

  export type CanonicalBetMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    key?: SortOrder
    betType?: SortOrder
    side?: SortOrder
    line?: SortOrder
    createdAt?: SortOrder
  }

  export type CanonicalBetSumOrderByAggregateInput = {
    line?: SortOrder
  }

  export type TeamAliasPlatformAliasLeagueCompoundUniqueInput = {
    platform: string
    alias: string
    league: string
  }

  export type TeamAliasCountOrderByAggregateInput = {
    id?: SortOrder
    canonical?: SortOrder
    platform?: SortOrder
    alias?: SortOrder
    league?: SortOrder
  }

  export type TeamAliasMaxOrderByAggregateInput = {
    id?: SortOrder
    canonical?: SortOrder
    platform?: SortOrder
    alias?: SortOrder
    league?: SortOrder
  }

  export type TeamAliasMinOrderByAggregateInput = {
    id?: SortOrder
    canonical?: SortOrder
    platform?: SortOrder
    alias?: SortOrder
    league?: SortOrder
  }

  export type OutcomeScalarRelationFilter = {
    is?: OutcomeWhereInput
    isNot?: OutcomeWhereInput
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    marketId?: SortOrder
    outcomeId?: SortOrder
    side?: SortOrder
    requestedSize?: SortOrder
    executedSize?: SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrder
    platform?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    requestedSize?: SortOrder
    executedSize?: SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    marketId?: SortOrder
    outcomeId?: SortOrder
    side?: SortOrder
    requestedSize?: SortOrder
    executedSize?: SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrder
    platform?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    marketId?: SortOrder
    outcomeId?: SortOrder
    side?: SortOrder
    requestedSize?: SortOrder
    executedSize?: SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrder
    platform?: SortOrder
    txHash?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    requestedSize?: SortOrder
    executedSize?: SortOrder
    requestedOdds?: SortOrder
    fillOdds?: SortOrder
  }

  export type BotConfigCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type BotConfigMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type BotConfigMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type PolymarketAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secret?: SortOrder
    passphrase?: SortOrder
    privateKey?: SortOrder
    funderAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolymarketAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secret?: SortOrder
    passphrase?: SortOrder
    privateKey?: SortOrder
    funderAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolymarketAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    secret?: SortOrder
    passphrase?: SortOrder
    privateKey?: SortOrder
    funderAddress?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutcomeNullableScalarRelationFilter = {
    is?: OutcomeWhereInput | null
    isNot?: OutcomeWhereInput | null
  }

  export type RiskTaskListRelationFilter = {
    every?: RiskTaskWhereInput
    some?: RiskTaskWhereInput
    none?: RiskTaskWhereInput
  }

  export type RiskTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiskPositionCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    outcomeId?: SortOrder
    tokenId?: SortOrder
    title?: SortOrder
    sideLabel?: SortOrder
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskPositionAvgOrderByAggregateInput = {
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
  }

  export type RiskPositionMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    outcomeId?: SortOrder
    tokenId?: SortOrder
    title?: SortOrder
    sideLabel?: SortOrder
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskPositionMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    outcomeId?: SortOrder
    tokenId?: SortOrder
    title?: SortOrder
    sideLabel?: SortOrder
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
    source?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskPositionSumOrderByAggregateInput = {
    avgEntryCents?: SortOrder
    sizeShares?: SortOrder
    costUsd?: SortOrder
    highWaterCents?: SortOrder
    stopLossPct?: SortOrder
  }

  export type RiskAppliedClobTradeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAppliedClobTradeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type RiskAppliedClobTradeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RiskPositionNullableScalarRelationFilter = {
    is?: RiskPositionWhereInput | null
    isNot?: RiskPositionWhereInput | null
  }

  export type RiskTaskCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    positionId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskTaskAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type RiskTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    positionId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskTaskMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    positionId?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    lastError?: SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskTaskSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MarketCreateNestedManyWithoutEventInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type CanonicalBetCreateNestedManyWithoutEventInput = {
    create?: XOR<CanonicalBetCreateWithoutEventInput, CanonicalBetUncheckedCreateWithoutEventInput> | CanonicalBetCreateWithoutEventInput[] | CanonicalBetUncheckedCreateWithoutEventInput[]
    connectOrCreate?: CanonicalBetCreateOrConnectWithoutEventInput | CanonicalBetCreateOrConnectWithoutEventInput[]
    createMany?: CanonicalBetCreateManyEventInputEnvelope
    connect?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
  }

  export type MarketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
  }

  export type CanonicalBetUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<CanonicalBetCreateWithoutEventInput, CanonicalBetUncheckedCreateWithoutEventInput> | CanonicalBetCreateWithoutEventInput[] | CanonicalBetUncheckedCreateWithoutEventInput[]
    connectOrCreate?: CanonicalBetCreateOrConnectWithoutEventInput | CanonicalBetCreateOrConnectWithoutEventInput[]
    createMany?: CanonicalBetCreateManyEventInputEnvelope
    connect?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MarketUpdateManyWithoutEventNestedInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutEventInput | MarketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutEventInput | MarketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutEventInput | MarketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type CanonicalBetUpdateManyWithoutEventNestedInput = {
    create?: XOR<CanonicalBetCreateWithoutEventInput, CanonicalBetUncheckedCreateWithoutEventInput> | CanonicalBetCreateWithoutEventInput[] | CanonicalBetUncheckedCreateWithoutEventInput[]
    connectOrCreate?: CanonicalBetCreateOrConnectWithoutEventInput | CanonicalBetCreateOrConnectWithoutEventInput[]
    upsert?: CanonicalBetUpsertWithWhereUniqueWithoutEventInput | CanonicalBetUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: CanonicalBetCreateManyEventInputEnvelope
    set?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    disconnect?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    delete?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    connect?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    update?: CanonicalBetUpdateWithWhereUniqueWithoutEventInput | CanonicalBetUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: CanonicalBetUpdateManyWithWhereWithoutEventInput | CanonicalBetUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: CanonicalBetScalarWhereInput | CanonicalBetScalarWhereInput[]
  }

  export type MarketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput> | MarketCreateWithoutEventInput[] | MarketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarketCreateOrConnectWithoutEventInput | MarketCreateOrConnectWithoutEventInput[]
    upsert?: MarketUpsertWithWhereUniqueWithoutEventInput | MarketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MarketCreateManyEventInputEnvelope
    set?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    disconnect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    delete?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    connect?: MarketWhereUniqueInput | MarketWhereUniqueInput[]
    update?: MarketUpdateWithWhereUniqueWithoutEventInput | MarketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MarketUpdateManyWithWhereWithoutEventInput | MarketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MarketScalarWhereInput | MarketScalarWhereInput[]
  }

  export type CanonicalBetUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<CanonicalBetCreateWithoutEventInput, CanonicalBetUncheckedCreateWithoutEventInput> | CanonicalBetCreateWithoutEventInput[] | CanonicalBetUncheckedCreateWithoutEventInput[]
    connectOrCreate?: CanonicalBetCreateOrConnectWithoutEventInput | CanonicalBetCreateOrConnectWithoutEventInput[]
    upsert?: CanonicalBetUpsertWithWhereUniqueWithoutEventInput | CanonicalBetUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: CanonicalBetCreateManyEventInputEnvelope
    set?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    disconnect?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    delete?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    connect?: CanonicalBetWhereUniqueInput | CanonicalBetWhereUniqueInput[]
    update?: CanonicalBetUpdateWithWhereUniqueWithoutEventInput | CanonicalBetUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: CanonicalBetUpdateManyWithWhereWithoutEventInput | CanonicalBetUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: CanonicalBetScalarWhereInput | CanonicalBetScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutMarketsInput = {
    create?: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutMarketsInput
    connect?: EventWhereUniqueInput
  }

  export type OutcomeCreateNestedManyWithoutMarketInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutMarketInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type OutcomeUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateOneRequiredWithoutMarketsNestedInput = {
    create?: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutMarketsInput
    upsert?: EventUpsertWithoutMarketsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutMarketsInput, EventUpdateWithoutMarketsInput>, EventUncheckedUpdateWithoutMarketsInput>
  }

  export type OutcomeUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutMarketInput | OutcomeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutMarketInput | OutcomeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutMarketInput | OutcomeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutMarketInput | TradeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutMarketInput | TradeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutMarketInput | TradeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type OutcomeUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput> | OutcomeCreateWithoutMarketInput[] | OutcomeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutMarketInput | OutcomeCreateOrConnectWithoutMarketInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutMarketInput | OutcomeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OutcomeCreateManyMarketInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutMarketInput | OutcomeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutMarketInput | OutcomeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput> | TradeCreateWithoutMarketInput[] | TradeUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutMarketInput | TradeCreateOrConnectWithoutMarketInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutMarketInput | TradeUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: TradeCreateManyMarketInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutMarketInput | TradeUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutMarketInput | TradeUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type MarketCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutOutcomesInput
    connect?: MarketWhereUniqueInput
  }

  export type CanonicalBetCreateNestedOneWithoutOutcomesInput = {
    create?: XOR<CanonicalBetCreateWithoutOutcomesInput, CanonicalBetUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: CanonicalBetCreateOrConnectWithoutOutcomesInput
    connect?: CanonicalBetWhereUniqueInput
  }

  export type TradeCreateNestedManyWithoutOutcomeInput = {
    create?: XOR<TradeCreateWithoutOutcomeInput, TradeUncheckedCreateWithoutOutcomeInput> | TradeCreateWithoutOutcomeInput[] | TradeUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutOutcomeInput | TradeCreateOrConnectWithoutOutcomeInput[]
    createMany?: TradeCreateManyOutcomeInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type RiskPositionCreateNestedManyWithoutOutcomeInput = {
    create?: XOR<RiskPositionCreateWithoutOutcomeInput, RiskPositionUncheckedCreateWithoutOutcomeInput> | RiskPositionCreateWithoutOutcomeInput[] | RiskPositionUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: RiskPositionCreateOrConnectWithoutOutcomeInput | RiskPositionCreateOrConnectWithoutOutcomeInput[]
    createMany?: RiskPositionCreateManyOutcomeInputEnvelope
    connect?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutOutcomeInput = {
    create?: XOR<TradeCreateWithoutOutcomeInput, TradeUncheckedCreateWithoutOutcomeInput> | TradeCreateWithoutOutcomeInput[] | TradeUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutOutcomeInput | TradeCreateOrConnectWithoutOutcomeInput[]
    createMany?: TradeCreateManyOutcomeInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type RiskPositionUncheckedCreateNestedManyWithoutOutcomeInput = {
    create?: XOR<RiskPositionCreateWithoutOutcomeInput, RiskPositionUncheckedCreateWithoutOutcomeInput> | RiskPositionCreateWithoutOutcomeInput[] | RiskPositionUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: RiskPositionCreateOrConnectWithoutOutcomeInput | RiskPositionCreateOrConnectWithoutOutcomeInput[]
    createMany?: RiskPositionCreateManyOutcomeInputEnvelope
    connect?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MarketUpdateOneRequiredWithoutOutcomesNestedInput = {
    create?: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutOutcomesInput
    upsert?: MarketUpsertWithoutOutcomesInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutOutcomesInput, MarketUpdateWithoutOutcomesInput>, MarketUncheckedUpdateWithoutOutcomesInput>
  }

  export type CanonicalBetUpdateOneWithoutOutcomesNestedInput = {
    create?: XOR<CanonicalBetCreateWithoutOutcomesInput, CanonicalBetUncheckedCreateWithoutOutcomesInput>
    connectOrCreate?: CanonicalBetCreateOrConnectWithoutOutcomesInput
    upsert?: CanonicalBetUpsertWithoutOutcomesInput
    disconnect?: CanonicalBetWhereInput | boolean
    delete?: CanonicalBetWhereInput | boolean
    connect?: CanonicalBetWhereUniqueInput
    update?: XOR<XOR<CanonicalBetUpdateToOneWithWhereWithoutOutcomesInput, CanonicalBetUpdateWithoutOutcomesInput>, CanonicalBetUncheckedUpdateWithoutOutcomesInput>
  }

  export type TradeUpdateManyWithoutOutcomeNestedInput = {
    create?: XOR<TradeCreateWithoutOutcomeInput, TradeUncheckedCreateWithoutOutcomeInput> | TradeCreateWithoutOutcomeInput[] | TradeUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutOutcomeInput | TradeCreateOrConnectWithoutOutcomeInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutOutcomeInput | TradeUpsertWithWhereUniqueWithoutOutcomeInput[]
    createMany?: TradeCreateManyOutcomeInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutOutcomeInput | TradeUpdateWithWhereUniqueWithoutOutcomeInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutOutcomeInput | TradeUpdateManyWithWhereWithoutOutcomeInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type RiskPositionUpdateManyWithoutOutcomeNestedInput = {
    create?: XOR<RiskPositionCreateWithoutOutcomeInput, RiskPositionUncheckedCreateWithoutOutcomeInput> | RiskPositionCreateWithoutOutcomeInput[] | RiskPositionUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: RiskPositionCreateOrConnectWithoutOutcomeInput | RiskPositionCreateOrConnectWithoutOutcomeInput[]
    upsert?: RiskPositionUpsertWithWhereUniqueWithoutOutcomeInput | RiskPositionUpsertWithWhereUniqueWithoutOutcomeInput[]
    createMany?: RiskPositionCreateManyOutcomeInputEnvelope
    set?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    disconnect?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    delete?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    connect?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    update?: RiskPositionUpdateWithWhereUniqueWithoutOutcomeInput | RiskPositionUpdateWithWhereUniqueWithoutOutcomeInput[]
    updateMany?: RiskPositionUpdateManyWithWhereWithoutOutcomeInput | RiskPositionUpdateManyWithWhereWithoutOutcomeInput[]
    deleteMany?: RiskPositionScalarWhereInput | RiskPositionScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutOutcomeNestedInput = {
    create?: XOR<TradeCreateWithoutOutcomeInput, TradeUncheckedCreateWithoutOutcomeInput> | TradeCreateWithoutOutcomeInput[] | TradeUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutOutcomeInput | TradeCreateOrConnectWithoutOutcomeInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutOutcomeInput | TradeUpsertWithWhereUniqueWithoutOutcomeInput[]
    createMany?: TradeCreateManyOutcomeInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutOutcomeInput | TradeUpdateWithWhereUniqueWithoutOutcomeInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutOutcomeInput | TradeUpdateManyWithWhereWithoutOutcomeInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type RiskPositionUncheckedUpdateManyWithoutOutcomeNestedInput = {
    create?: XOR<RiskPositionCreateWithoutOutcomeInput, RiskPositionUncheckedCreateWithoutOutcomeInput> | RiskPositionCreateWithoutOutcomeInput[] | RiskPositionUncheckedCreateWithoutOutcomeInput[]
    connectOrCreate?: RiskPositionCreateOrConnectWithoutOutcomeInput | RiskPositionCreateOrConnectWithoutOutcomeInput[]
    upsert?: RiskPositionUpsertWithWhereUniqueWithoutOutcomeInput | RiskPositionUpsertWithWhereUniqueWithoutOutcomeInput[]
    createMany?: RiskPositionCreateManyOutcomeInputEnvelope
    set?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    disconnect?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    delete?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    connect?: RiskPositionWhereUniqueInput | RiskPositionWhereUniqueInput[]
    update?: RiskPositionUpdateWithWhereUniqueWithoutOutcomeInput | RiskPositionUpdateWithWhereUniqueWithoutOutcomeInput[]
    updateMany?: RiskPositionUpdateManyWithWhereWithoutOutcomeInput | RiskPositionUpdateManyWithWhereWithoutOutcomeInput[]
    deleteMany?: RiskPositionScalarWhereInput | RiskPositionScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutCanonicalBetsInput = {
    create?: XOR<EventCreateWithoutCanonicalBetsInput, EventUncheckedCreateWithoutCanonicalBetsInput>
    connectOrCreate?: EventCreateOrConnectWithoutCanonicalBetsInput
    connect?: EventWhereUniqueInput
  }

  export type OutcomeCreateNestedManyWithoutCanonicalBetInput = {
    create?: XOR<OutcomeCreateWithoutCanonicalBetInput, OutcomeUncheckedCreateWithoutCanonicalBetInput> | OutcomeCreateWithoutCanonicalBetInput[] | OutcomeUncheckedCreateWithoutCanonicalBetInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutCanonicalBetInput | OutcomeCreateOrConnectWithoutCanonicalBetInput[]
    createMany?: OutcomeCreateManyCanonicalBetInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type OutcomeUncheckedCreateNestedManyWithoutCanonicalBetInput = {
    create?: XOR<OutcomeCreateWithoutCanonicalBetInput, OutcomeUncheckedCreateWithoutCanonicalBetInput> | OutcomeCreateWithoutCanonicalBetInput[] | OutcomeUncheckedCreateWithoutCanonicalBetInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutCanonicalBetInput | OutcomeCreateOrConnectWithoutCanonicalBetInput[]
    createMany?: OutcomeCreateManyCanonicalBetInputEnvelope
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutCanonicalBetsNestedInput = {
    create?: XOR<EventCreateWithoutCanonicalBetsInput, EventUncheckedCreateWithoutCanonicalBetsInput>
    connectOrCreate?: EventCreateOrConnectWithoutCanonicalBetsInput
    upsert?: EventUpsertWithoutCanonicalBetsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutCanonicalBetsInput, EventUpdateWithoutCanonicalBetsInput>, EventUncheckedUpdateWithoutCanonicalBetsInput>
  }

  export type OutcomeUpdateManyWithoutCanonicalBetNestedInput = {
    create?: XOR<OutcomeCreateWithoutCanonicalBetInput, OutcomeUncheckedCreateWithoutCanonicalBetInput> | OutcomeCreateWithoutCanonicalBetInput[] | OutcomeUncheckedCreateWithoutCanonicalBetInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutCanonicalBetInput | OutcomeCreateOrConnectWithoutCanonicalBetInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutCanonicalBetInput | OutcomeUpsertWithWhereUniqueWithoutCanonicalBetInput[]
    createMany?: OutcomeCreateManyCanonicalBetInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutCanonicalBetInput | OutcomeUpdateWithWhereUniqueWithoutCanonicalBetInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutCanonicalBetInput | OutcomeUpdateManyWithWhereWithoutCanonicalBetInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type OutcomeUncheckedUpdateManyWithoutCanonicalBetNestedInput = {
    create?: XOR<OutcomeCreateWithoutCanonicalBetInput, OutcomeUncheckedCreateWithoutCanonicalBetInput> | OutcomeCreateWithoutCanonicalBetInput[] | OutcomeUncheckedCreateWithoutCanonicalBetInput[]
    connectOrCreate?: OutcomeCreateOrConnectWithoutCanonicalBetInput | OutcomeCreateOrConnectWithoutCanonicalBetInput[]
    upsert?: OutcomeUpsertWithWhereUniqueWithoutCanonicalBetInput | OutcomeUpsertWithWhereUniqueWithoutCanonicalBetInput[]
    createMany?: OutcomeCreateManyCanonicalBetInputEnvelope
    set?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    disconnect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    delete?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    connect?: OutcomeWhereUniqueInput | OutcomeWhereUniqueInput[]
    update?: OutcomeUpdateWithWhereUniqueWithoutCanonicalBetInput | OutcomeUpdateWithWhereUniqueWithoutCanonicalBetInput[]
    updateMany?: OutcomeUpdateManyWithWhereWithoutCanonicalBetInput | OutcomeUpdateManyWithWhereWithoutCanonicalBetInput[]
    deleteMany?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
  }

  export type MarketCreateNestedOneWithoutTradesInput = {
    create?: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutTradesInput
    connect?: MarketWhereUniqueInput
  }

  export type OutcomeCreateNestedOneWithoutTradesInput = {
    create?: XOR<OutcomeCreateWithoutTradesInput, OutcomeUncheckedCreateWithoutTradesInput>
    connectOrCreate?: OutcomeCreateOrConnectWithoutTradesInput
    connect?: OutcomeWhereUniqueInput
  }

  export type MarketUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
    connectOrCreate?: MarketCreateOrConnectWithoutTradesInput
    upsert?: MarketUpsertWithoutTradesInput
    connect?: MarketWhereUniqueInput
    update?: XOR<XOR<MarketUpdateToOneWithWhereWithoutTradesInput, MarketUpdateWithoutTradesInput>, MarketUncheckedUpdateWithoutTradesInput>
  }

  export type OutcomeUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<OutcomeCreateWithoutTradesInput, OutcomeUncheckedCreateWithoutTradesInput>
    connectOrCreate?: OutcomeCreateOrConnectWithoutTradesInput
    upsert?: OutcomeUpsertWithoutTradesInput
    connect?: OutcomeWhereUniqueInput
    update?: XOR<XOR<OutcomeUpdateToOneWithWhereWithoutTradesInput, OutcomeUpdateWithoutTradesInput>, OutcomeUncheckedUpdateWithoutTradesInput>
  }

  export type OutcomeCreateNestedOneWithoutRiskPositionsInput = {
    create?: XOR<OutcomeCreateWithoutRiskPositionsInput, OutcomeUncheckedCreateWithoutRiskPositionsInput>
    connectOrCreate?: OutcomeCreateOrConnectWithoutRiskPositionsInput
    connect?: OutcomeWhereUniqueInput
  }

  export type RiskTaskCreateNestedManyWithoutPositionInput = {
    create?: XOR<RiskTaskCreateWithoutPositionInput, RiskTaskUncheckedCreateWithoutPositionInput> | RiskTaskCreateWithoutPositionInput[] | RiskTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RiskTaskCreateOrConnectWithoutPositionInput | RiskTaskCreateOrConnectWithoutPositionInput[]
    createMany?: RiskTaskCreateManyPositionInputEnvelope
    connect?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
  }

  export type RiskTaskUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<RiskTaskCreateWithoutPositionInput, RiskTaskUncheckedCreateWithoutPositionInput> | RiskTaskCreateWithoutPositionInput[] | RiskTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RiskTaskCreateOrConnectWithoutPositionInput | RiskTaskCreateOrConnectWithoutPositionInput[]
    createMany?: RiskTaskCreateManyPositionInputEnvelope
    connect?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
  }

  export type OutcomeUpdateOneWithoutRiskPositionsNestedInput = {
    create?: XOR<OutcomeCreateWithoutRiskPositionsInput, OutcomeUncheckedCreateWithoutRiskPositionsInput>
    connectOrCreate?: OutcomeCreateOrConnectWithoutRiskPositionsInput
    upsert?: OutcomeUpsertWithoutRiskPositionsInput
    disconnect?: OutcomeWhereInput | boolean
    delete?: OutcomeWhereInput | boolean
    connect?: OutcomeWhereUniqueInput
    update?: XOR<XOR<OutcomeUpdateToOneWithWhereWithoutRiskPositionsInput, OutcomeUpdateWithoutRiskPositionsInput>, OutcomeUncheckedUpdateWithoutRiskPositionsInput>
  }

  export type RiskTaskUpdateManyWithoutPositionNestedInput = {
    create?: XOR<RiskTaskCreateWithoutPositionInput, RiskTaskUncheckedCreateWithoutPositionInput> | RiskTaskCreateWithoutPositionInput[] | RiskTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RiskTaskCreateOrConnectWithoutPositionInput | RiskTaskCreateOrConnectWithoutPositionInput[]
    upsert?: RiskTaskUpsertWithWhereUniqueWithoutPositionInput | RiskTaskUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: RiskTaskCreateManyPositionInputEnvelope
    set?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    disconnect?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    delete?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    connect?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    update?: RiskTaskUpdateWithWhereUniqueWithoutPositionInput | RiskTaskUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: RiskTaskUpdateManyWithWhereWithoutPositionInput | RiskTaskUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: RiskTaskScalarWhereInput | RiskTaskScalarWhereInput[]
  }

  export type RiskTaskUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<RiskTaskCreateWithoutPositionInput, RiskTaskUncheckedCreateWithoutPositionInput> | RiskTaskCreateWithoutPositionInput[] | RiskTaskUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: RiskTaskCreateOrConnectWithoutPositionInput | RiskTaskCreateOrConnectWithoutPositionInput[]
    upsert?: RiskTaskUpsertWithWhereUniqueWithoutPositionInput | RiskTaskUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: RiskTaskCreateManyPositionInputEnvelope
    set?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    disconnect?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    delete?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    connect?: RiskTaskWhereUniqueInput | RiskTaskWhereUniqueInput[]
    update?: RiskTaskUpdateWithWhereUniqueWithoutPositionInput | RiskTaskUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: RiskTaskUpdateManyWithWhereWithoutPositionInput | RiskTaskUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: RiskTaskScalarWhereInput | RiskTaskScalarWhereInput[]
  }

  export type RiskPositionCreateNestedOneWithoutTasksInput = {
    create?: XOR<RiskPositionCreateWithoutTasksInput, RiskPositionUncheckedCreateWithoutTasksInput>
    connectOrCreate?: RiskPositionCreateOrConnectWithoutTasksInput
    connect?: RiskPositionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RiskPositionUpdateOneWithoutTasksNestedInput = {
    create?: XOR<RiskPositionCreateWithoutTasksInput, RiskPositionUncheckedCreateWithoutTasksInput>
    connectOrCreate?: RiskPositionCreateOrConnectWithoutTasksInput
    upsert?: RiskPositionUpsertWithoutTasksInput
    disconnect?: RiskPositionWhereInput | boolean
    delete?: RiskPositionWhereInput | boolean
    connect?: RiskPositionWhereUniqueInput
    update?: XOR<XOR<RiskPositionUpdateToOneWithWhereWithoutTasksInput, RiskPositionUpdateWithoutTasksInput>, RiskPositionUncheckedUpdateWithoutTasksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MarketCreateWithoutEventInput = {
    id?: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    outcomes?: OutcomeCreateNestedManyWithoutMarketInput
    trades?: TradeCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutEventInput = {
    id?: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutMarketInput
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutEventInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput>
  }

  export type MarketCreateManyEventInputEnvelope = {
    data: MarketCreateManyEventInput | MarketCreateManyEventInput[]
  }

  export type CanonicalBetCreateWithoutEventInput = {
    id?: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
    outcomes?: OutcomeCreateNestedManyWithoutCanonicalBetInput
  }

  export type CanonicalBetUncheckedCreateWithoutEventInput = {
    id?: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutCanonicalBetInput
  }

  export type CanonicalBetCreateOrConnectWithoutEventInput = {
    where: CanonicalBetWhereUniqueInput
    create: XOR<CanonicalBetCreateWithoutEventInput, CanonicalBetUncheckedCreateWithoutEventInput>
  }

  export type CanonicalBetCreateManyEventInputEnvelope = {
    data: CanonicalBetCreateManyEventInput | CanonicalBetCreateManyEventInput[]
  }

  export type MarketUpsertWithWhereUniqueWithoutEventInput = {
    where: MarketWhereUniqueInput
    update: XOR<MarketUpdateWithoutEventInput, MarketUncheckedUpdateWithoutEventInput>
    create: XOR<MarketCreateWithoutEventInput, MarketUncheckedCreateWithoutEventInput>
  }

  export type MarketUpdateWithWhereUniqueWithoutEventInput = {
    where: MarketWhereUniqueInput
    data: XOR<MarketUpdateWithoutEventInput, MarketUncheckedUpdateWithoutEventInput>
  }

  export type MarketUpdateManyWithWhereWithoutEventInput = {
    where: MarketScalarWhereInput
    data: XOR<MarketUpdateManyMutationInput, MarketUncheckedUpdateManyWithoutEventInput>
  }

  export type MarketScalarWhereInput = {
    AND?: MarketScalarWhereInput | MarketScalarWhereInput[]
    OR?: MarketScalarWhereInput[]
    NOT?: MarketScalarWhereInput | MarketScalarWhereInput[]
    id?: StringFilter<"Market"> | string
    eventId?: StringFilter<"Market"> | string
    platform?: StringFilter<"Market"> | string
    externalId?: StringFilter<"Market"> | string
    startTime?: DateTimeFilter<"Market"> | Date | string
    betType?: StringFilter<"Market"> | string
    line?: FloatNullableFilter<"Market"> | number | null
    mainLine?: BoolFilter<"Market"> | boolean
    status?: StringFilter<"Market"> | string
    createdAt?: DateTimeFilter<"Market"> | Date | string
  }

  export type CanonicalBetUpsertWithWhereUniqueWithoutEventInput = {
    where: CanonicalBetWhereUniqueInput
    update: XOR<CanonicalBetUpdateWithoutEventInput, CanonicalBetUncheckedUpdateWithoutEventInput>
    create: XOR<CanonicalBetCreateWithoutEventInput, CanonicalBetUncheckedCreateWithoutEventInput>
  }

  export type CanonicalBetUpdateWithWhereUniqueWithoutEventInput = {
    where: CanonicalBetWhereUniqueInput
    data: XOR<CanonicalBetUpdateWithoutEventInput, CanonicalBetUncheckedUpdateWithoutEventInput>
  }

  export type CanonicalBetUpdateManyWithWhereWithoutEventInput = {
    where: CanonicalBetScalarWhereInput
    data: XOR<CanonicalBetUpdateManyMutationInput, CanonicalBetUncheckedUpdateManyWithoutEventInput>
  }

  export type CanonicalBetScalarWhereInput = {
    AND?: CanonicalBetScalarWhereInput | CanonicalBetScalarWhereInput[]
    OR?: CanonicalBetScalarWhereInput[]
    NOT?: CanonicalBetScalarWhereInput | CanonicalBetScalarWhereInput[]
    id?: StringFilter<"CanonicalBet"> | string
    eventId?: StringFilter<"CanonicalBet"> | string
    key?: StringFilter<"CanonicalBet"> | string
    betType?: StringFilter<"CanonicalBet"> | string
    side?: StringFilter<"CanonicalBet"> | string
    line?: FloatNullableFilter<"CanonicalBet"> | number | null
    createdAt?: DateTimeFilter<"CanonicalBet"> | Date | string
  }

  export type EventCreateWithoutMarketsInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
    canonicalBets?: CanonicalBetCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutMarketsInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
    canonicalBets?: CanonicalBetUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutMarketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
  }

  export type OutcomeCreateWithoutMarketInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBet?: CanonicalBetCreateNestedOneWithoutOutcomesInput
    trades?: TradeCreateNestedManyWithoutOutcomeInput
    riskPositions?: RiskPositionCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeUncheckedCreateWithoutMarketInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBetId?: string | null
    trades?: TradeUncheckedCreateNestedManyWithoutOutcomeInput
    riskPositions?: RiskPositionUncheckedCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeCreateOrConnectWithoutMarketInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput>
  }

  export type OutcomeCreateManyMarketInputEnvelope = {
    data: OutcomeCreateManyMarketInput | OutcomeCreateManyMarketInput[]
  }

  export type TradeCreateWithoutMarketInput = {
    id?: string
    createdAt?: Date | string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
    outcome: OutcomeCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutMarketInput = {
    id?: string
    createdAt?: Date | string
    outcomeId: string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
  }

  export type TradeCreateOrConnectWithoutMarketInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput>
  }

  export type TradeCreateManyMarketInputEnvelope = {
    data: TradeCreateManyMarketInput | TradeCreateManyMarketInput[]
  }

  export type EventUpsertWithoutMarketsInput = {
    update: XOR<EventUpdateWithoutMarketsInput, EventUncheckedUpdateWithoutMarketsInput>
    create: XOR<EventCreateWithoutMarketsInput, EventUncheckedCreateWithoutMarketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutMarketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutMarketsInput, EventUncheckedUpdateWithoutMarketsInput>
  }

  export type EventUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBets?: CanonicalBetUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutMarketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBets?: CanonicalBetUncheckedUpdateManyWithoutEventNestedInput
  }

  export type OutcomeUpsertWithWhereUniqueWithoutMarketInput = {
    where: OutcomeWhereUniqueInput
    update: XOR<OutcomeUpdateWithoutMarketInput, OutcomeUncheckedUpdateWithoutMarketInput>
    create: XOR<OutcomeCreateWithoutMarketInput, OutcomeUncheckedCreateWithoutMarketInput>
  }

  export type OutcomeUpdateWithWhereUniqueWithoutMarketInput = {
    where: OutcomeWhereUniqueInput
    data: XOR<OutcomeUpdateWithoutMarketInput, OutcomeUncheckedUpdateWithoutMarketInput>
  }

  export type OutcomeUpdateManyWithWhereWithoutMarketInput = {
    where: OutcomeScalarWhereInput
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyWithoutMarketInput>
  }

  export type OutcomeScalarWhereInput = {
    AND?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
    OR?: OutcomeScalarWhereInput[]
    NOT?: OutcomeScalarWhereInput | OutcomeScalarWhereInput[]
    id?: StringFilter<"Outcome"> | string
    marketId?: StringFilter<"Outcome"> | string
    label?: StringFilter<"Outcome"> | string
    externalId?: StringNullableFilter<"Outcome"> | string | null
    currentOdds?: FloatFilter<"Outcome"> | number
    liquidityDepth?: FloatFilter<"Outcome"> | number
    liquidityLevels?: StringNullableFilter<"Outcome"> | string | null
    lastUpdated?: DateTimeFilter<"Outcome"> | Date | string
    canonicalBetId?: StringNullableFilter<"Outcome"> | string | null
  }

  export type TradeUpsertWithWhereUniqueWithoutMarketInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutMarketInput, TradeUncheckedUpdateWithoutMarketInput>
    create: XOR<TradeCreateWithoutMarketInput, TradeUncheckedCreateWithoutMarketInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutMarketInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutMarketInput, TradeUncheckedUpdateWithoutMarketInput>
  }

  export type TradeUpdateManyWithWhereWithoutMarketInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutMarketInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: StringFilter<"Trade"> | string
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    marketId?: StringFilter<"Trade"> | string
    outcomeId?: StringFilter<"Trade"> | string
    side?: StringFilter<"Trade"> | string
    requestedSize?: FloatFilter<"Trade"> | number
    executedSize?: FloatNullableFilter<"Trade"> | number | null
    requestedOdds?: FloatFilter<"Trade"> | number
    fillOdds?: FloatNullableFilter<"Trade"> | number | null
    platform?: StringFilter<"Trade"> | string
    txHash?: StringNullableFilter<"Trade"> | string | null
    status?: StringFilter<"Trade"> | string
    failureReason?: StringNullableFilter<"Trade"> | string | null
  }

  export type MarketCreateWithoutOutcomesInput = {
    id?: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutMarketsInput
    trades?: TradeCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutOutcomesInput = {
    id?: string
    eventId: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutOutcomesInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
  }

  export type CanonicalBetCreateWithoutOutcomesInput = {
    id?: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutCanonicalBetsInput
  }

  export type CanonicalBetUncheckedCreateWithoutOutcomesInput = {
    id?: string
    eventId: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
  }

  export type CanonicalBetCreateOrConnectWithoutOutcomesInput = {
    where: CanonicalBetWhereUniqueInput
    create: XOR<CanonicalBetCreateWithoutOutcomesInput, CanonicalBetUncheckedCreateWithoutOutcomesInput>
  }

  export type TradeCreateWithoutOutcomeInput = {
    id?: string
    createdAt?: Date | string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
    market: MarketCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutOutcomeInput = {
    id?: string
    createdAt?: Date | string
    marketId: string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
  }

  export type TradeCreateOrConnectWithoutOutcomeInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutOutcomeInput, TradeUncheckedCreateWithoutOutcomeInput>
  }

  export type TradeCreateManyOutcomeInputEnvelope = {
    data: TradeCreateManyOutcomeInput | TradeCreateManyOutcomeInput[]
  }

  export type RiskPositionCreateWithoutOutcomeInput = {
    id?: string
    platform?: string
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: RiskTaskCreateNestedManyWithoutPositionInput
  }

  export type RiskPositionUncheckedCreateWithoutOutcomeInput = {
    id?: string
    platform?: string
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: RiskTaskUncheckedCreateNestedManyWithoutPositionInput
  }

  export type RiskPositionCreateOrConnectWithoutOutcomeInput = {
    where: RiskPositionWhereUniqueInput
    create: XOR<RiskPositionCreateWithoutOutcomeInput, RiskPositionUncheckedCreateWithoutOutcomeInput>
  }

  export type RiskPositionCreateManyOutcomeInputEnvelope = {
    data: RiskPositionCreateManyOutcomeInput | RiskPositionCreateManyOutcomeInput[]
  }

  export type MarketUpsertWithoutOutcomesInput = {
    update: XOR<MarketUpdateWithoutOutcomesInput, MarketUncheckedUpdateWithoutOutcomesInput>
    create: XOR<MarketCreateWithoutOutcomesInput, MarketUncheckedCreateWithoutOutcomesInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutOutcomesInput, MarketUncheckedUpdateWithoutOutcomesInput>
  }

  export type MarketUpdateWithoutOutcomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutMarketsNestedInput
    trades?: TradeUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutOutcomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type CanonicalBetUpsertWithoutOutcomesInput = {
    update: XOR<CanonicalBetUpdateWithoutOutcomesInput, CanonicalBetUncheckedUpdateWithoutOutcomesInput>
    create: XOR<CanonicalBetCreateWithoutOutcomesInput, CanonicalBetUncheckedCreateWithoutOutcomesInput>
    where?: CanonicalBetWhereInput
  }

  export type CanonicalBetUpdateToOneWithWhereWithoutOutcomesInput = {
    where?: CanonicalBetWhereInput
    data: XOR<CanonicalBetUpdateWithoutOutcomesInput, CanonicalBetUncheckedUpdateWithoutOutcomesInput>
  }

  export type CanonicalBetUpdateWithoutOutcomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutCanonicalBetsNestedInput
  }

  export type CanonicalBetUncheckedUpdateWithoutOutcomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUpsertWithWhereUniqueWithoutOutcomeInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutOutcomeInput, TradeUncheckedUpdateWithoutOutcomeInput>
    create: XOR<TradeCreateWithoutOutcomeInput, TradeUncheckedCreateWithoutOutcomeInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutOutcomeInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutOutcomeInput, TradeUncheckedUpdateWithoutOutcomeInput>
  }

  export type TradeUpdateManyWithWhereWithoutOutcomeInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutOutcomeInput>
  }

  export type RiskPositionUpsertWithWhereUniqueWithoutOutcomeInput = {
    where: RiskPositionWhereUniqueInput
    update: XOR<RiskPositionUpdateWithoutOutcomeInput, RiskPositionUncheckedUpdateWithoutOutcomeInput>
    create: XOR<RiskPositionCreateWithoutOutcomeInput, RiskPositionUncheckedCreateWithoutOutcomeInput>
  }

  export type RiskPositionUpdateWithWhereUniqueWithoutOutcomeInput = {
    where: RiskPositionWhereUniqueInput
    data: XOR<RiskPositionUpdateWithoutOutcomeInput, RiskPositionUncheckedUpdateWithoutOutcomeInput>
  }

  export type RiskPositionUpdateManyWithWhereWithoutOutcomeInput = {
    where: RiskPositionScalarWhereInput
    data: XOR<RiskPositionUpdateManyMutationInput, RiskPositionUncheckedUpdateManyWithoutOutcomeInput>
  }

  export type RiskPositionScalarWhereInput = {
    AND?: RiskPositionScalarWhereInput | RiskPositionScalarWhereInput[]
    OR?: RiskPositionScalarWhereInput[]
    NOT?: RiskPositionScalarWhereInput | RiskPositionScalarWhereInput[]
    id?: StringFilter<"RiskPosition"> | string
    platform?: StringFilter<"RiskPosition"> | string
    outcomeId?: StringNullableFilter<"RiskPosition"> | string | null
    tokenId?: StringFilter<"RiskPosition"> | string
    title?: StringFilter<"RiskPosition"> | string
    sideLabel?: StringFilter<"RiskPosition"> | string
    avgEntryCents?: FloatFilter<"RiskPosition"> | number
    sizeShares?: FloatFilter<"RiskPosition"> | number
    costUsd?: FloatFilter<"RiskPosition"> | number
    highWaterCents?: FloatFilter<"RiskPosition"> | number
    stopLossPct?: FloatFilter<"RiskPosition"> | number
    source?: StringFilter<"RiskPosition"> | string
    status?: StringFilter<"RiskPosition"> | string
    createdAt?: DateTimeFilter<"RiskPosition"> | Date | string
    updatedAt?: DateTimeFilter<"RiskPosition"> | Date | string
  }

  export type EventCreateWithoutCanonicalBetsInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
    markets?: MarketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCanonicalBetsInput = {
    id?: string
    sport: string
    league: string
    homeTeam: string
    awayTeam: string
    startTime: Date | string
    status?: string
    sxEventId?: string | null
    polyEventId?: string | null
    createdAt?: Date | string
    markets?: MarketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCanonicalBetsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCanonicalBetsInput, EventUncheckedCreateWithoutCanonicalBetsInput>
  }

  export type OutcomeCreateWithoutCanonicalBetInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    market: MarketCreateNestedOneWithoutOutcomesInput
    trades?: TradeCreateNestedManyWithoutOutcomeInput
    riskPositions?: RiskPositionCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeUncheckedCreateWithoutCanonicalBetInput = {
    id?: string
    marketId: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutOutcomeInput
    riskPositions?: RiskPositionUncheckedCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeCreateOrConnectWithoutCanonicalBetInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutCanonicalBetInput, OutcomeUncheckedCreateWithoutCanonicalBetInput>
  }

  export type OutcomeCreateManyCanonicalBetInputEnvelope = {
    data: OutcomeCreateManyCanonicalBetInput | OutcomeCreateManyCanonicalBetInput[]
  }

  export type EventUpsertWithoutCanonicalBetsInput = {
    update: XOR<EventUpdateWithoutCanonicalBetsInput, EventUncheckedUpdateWithoutCanonicalBetsInput>
    create: XOR<EventCreateWithoutCanonicalBetsInput, EventUncheckedCreateWithoutCanonicalBetsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutCanonicalBetsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutCanonicalBetsInput, EventUncheckedUpdateWithoutCanonicalBetsInput>
  }

  export type EventUpdateWithoutCanonicalBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCanonicalBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sport?: StringFieldUpdateOperationsInput | string
    league?: StringFieldUpdateOperationsInput | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    sxEventId?: NullableStringFieldUpdateOperationsInput | string | null
    polyEventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    markets?: MarketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type OutcomeUpsertWithWhereUniqueWithoutCanonicalBetInput = {
    where: OutcomeWhereUniqueInput
    update: XOR<OutcomeUpdateWithoutCanonicalBetInput, OutcomeUncheckedUpdateWithoutCanonicalBetInput>
    create: XOR<OutcomeCreateWithoutCanonicalBetInput, OutcomeUncheckedCreateWithoutCanonicalBetInput>
  }

  export type OutcomeUpdateWithWhereUniqueWithoutCanonicalBetInput = {
    where: OutcomeWhereUniqueInput
    data: XOR<OutcomeUpdateWithoutCanonicalBetInput, OutcomeUncheckedUpdateWithoutCanonicalBetInput>
  }

  export type OutcomeUpdateManyWithWhereWithoutCanonicalBetInput = {
    where: OutcomeScalarWhereInput
    data: XOR<OutcomeUpdateManyMutationInput, OutcomeUncheckedUpdateManyWithoutCanonicalBetInput>
  }

  export type MarketCreateWithoutTradesInput = {
    id?: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutMarketsInput
    outcomes?: OutcomeCreateNestedManyWithoutMarketInput
  }

  export type MarketUncheckedCreateWithoutTradesInput = {
    id?: string
    eventId: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
    outcomes?: OutcomeUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketCreateOrConnectWithoutTradesInput = {
    where: MarketWhereUniqueInput
    create: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
  }

  export type OutcomeCreateWithoutTradesInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    market: MarketCreateNestedOneWithoutOutcomesInput
    canonicalBet?: CanonicalBetCreateNestedOneWithoutOutcomesInput
    riskPositions?: RiskPositionCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeUncheckedCreateWithoutTradesInput = {
    id?: string
    marketId: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBetId?: string | null
    riskPositions?: RiskPositionUncheckedCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeCreateOrConnectWithoutTradesInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutTradesInput, OutcomeUncheckedCreateWithoutTradesInput>
  }

  export type MarketUpsertWithoutTradesInput = {
    update: XOR<MarketUpdateWithoutTradesInput, MarketUncheckedUpdateWithoutTradesInput>
    create: XOR<MarketCreateWithoutTradesInput, MarketUncheckedCreateWithoutTradesInput>
    where?: MarketWhereInput
  }

  export type MarketUpdateToOneWithWhereWithoutTradesInput = {
    where?: MarketWhereInput
    data: XOR<MarketUpdateWithoutTradesInput, MarketUncheckedUpdateWithoutTradesInput>
  }

  export type MarketUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutMarketsNestedInput
    outcomes?: OutcomeUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type OutcomeUpsertWithoutTradesInput = {
    update: XOR<OutcomeUpdateWithoutTradesInput, OutcomeUncheckedUpdateWithoutTradesInput>
    create: XOR<OutcomeCreateWithoutTradesInput, OutcomeUncheckedCreateWithoutTradesInput>
    where?: OutcomeWhereInput
  }

  export type OutcomeUpdateToOneWithWhereWithoutTradesInput = {
    where?: OutcomeWhereInput
    data: XOR<OutcomeUpdateWithoutTradesInput, OutcomeUncheckedUpdateWithoutTradesInput>
  }

  export type OutcomeUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutOutcomesNestedInput
    canonicalBet?: CanonicalBetUpdateOneWithoutOutcomesNestedInput
    riskPositions?: RiskPositionUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBetId?: NullableStringFieldUpdateOperationsInput | string | null
    riskPositions?: RiskPositionUncheckedUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeCreateWithoutRiskPositionsInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    market: MarketCreateNestedOneWithoutOutcomesInput
    canonicalBet?: CanonicalBetCreateNestedOneWithoutOutcomesInput
    trades?: TradeCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeUncheckedCreateWithoutRiskPositionsInput = {
    id?: string
    marketId: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBetId?: string | null
    trades?: TradeUncheckedCreateNestedManyWithoutOutcomeInput
  }

  export type OutcomeCreateOrConnectWithoutRiskPositionsInput = {
    where: OutcomeWhereUniqueInput
    create: XOR<OutcomeCreateWithoutRiskPositionsInput, OutcomeUncheckedCreateWithoutRiskPositionsInput>
  }

  export type RiskTaskCreateWithoutPositionInput = {
    id?: string
    type: string
    status?: string
    attempts?: number
    lastError?: string | null
    nextRunAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskTaskUncheckedCreateWithoutPositionInput = {
    id?: string
    type: string
    status?: string
    attempts?: number
    lastError?: string | null
    nextRunAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskTaskCreateOrConnectWithoutPositionInput = {
    where: RiskTaskWhereUniqueInput
    create: XOR<RiskTaskCreateWithoutPositionInput, RiskTaskUncheckedCreateWithoutPositionInput>
  }

  export type RiskTaskCreateManyPositionInputEnvelope = {
    data: RiskTaskCreateManyPositionInput | RiskTaskCreateManyPositionInput[]
  }

  export type OutcomeUpsertWithoutRiskPositionsInput = {
    update: XOR<OutcomeUpdateWithoutRiskPositionsInput, OutcomeUncheckedUpdateWithoutRiskPositionsInput>
    create: XOR<OutcomeCreateWithoutRiskPositionsInput, OutcomeUncheckedCreateWithoutRiskPositionsInput>
    where?: OutcomeWhereInput
  }

  export type OutcomeUpdateToOneWithWhereWithoutRiskPositionsInput = {
    where?: OutcomeWhereInput
    data: XOR<OutcomeUpdateWithoutRiskPositionsInput, OutcomeUncheckedUpdateWithoutRiskPositionsInput>
  }

  export type OutcomeUpdateWithoutRiskPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutOutcomesNestedInput
    canonicalBet?: CanonicalBetUpdateOneWithoutOutcomesNestedInput
    trades?: TradeUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateWithoutRiskPositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBetId?: NullableStringFieldUpdateOperationsInput | string | null
    trades?: TradeUncheckedUpdateManyWithoutOutcomeNestedInput
  }

  export type RiskTaskUpsertWithWhereUniqueWithoutPositionInput = {
    where: RiskTaskWhereUniqueInput
    update: XOR<RiskTaskUpdateWithoutPositionInput, RiskTaskUncheckedUpdateWithoutPositionInput>
    create: XOR<RiskTaskCreateWithoutPositionInput, RiskTaskUncheckedCreateWithoutPositionInput>
  }

  export type RiskTaskUpdateWithWhereUniqueWithoutPositionInput = {
    where: RiskTaskWhereUniqueInput
    data: XOR<RiskTaskUpdateWithoutPositionInput, RiskTaskUncheckedUpdateWithoutPositionInput>
  }

  export type RiskTaskUpdateManyWithWhereWithoutPositionInput = {
    where: RiskTaskScalarWhereInput
    data: XOR<RiskTaskUpdateManyMutationInput, RiskTaskUncheckedUpdateManyWithoutPositionInput>
  }

  export type RiskTaskScalarWhereInput = {
    AND?: RiskTaskScalarWhereInput | RiskTaskScalarWhereInput[]
    OR?: RiskTaskScalarWhereInput[]
    NOT?: RiskTaskScalarWhereInput | RiskTaskScalarWhereInput[]
    id?: StringFilter<"RiskTask"> | string
    type?: StringFilter<"RiskTask"> | string
    positionId?: StringNullableFilter<"RiskTask"> | string | null
    status?: StringFilter<"RiskTask"> | string
    attempts?: IntFilter<"RiskTask"> | number
    lastError?: StringNullableFilter<"RiskTask"> | string | null
    nextRunAt?: DateTimeFilter<"RiskTask"> | Date | string
    createdAt?: DateTimeFilter<"RiskTask"> | Date | string
    updatedAt?: DateTimeFilter<"RiskTask"> | Date | string
  }

  export type RiskPositionCreateWithoutTasksInput = {
    id?: string
    platform?: string
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outcome?: OutcomeCreateNestedOneWithoutRiskPositionsInput
  }

  export type RiskPositionUncheckedCreateWithoutTasksInput = {
    id?: string
    platform?: string
    outcomeId?: string | null
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskPositionCreateOrConnectWithoutTasksInput = {
    where: RiskPositionWhereUniqueInput
    create: XOR<RiskPositionCreateWithoutTasksInput, RiskPositionUncheckedCreateWithoutTasksInput>
  }

  export type RiskPositionUpsertWithoutTasksInput = {
    update: XOR<RiskPositionUpdateWithoutTasksInput, RiskPositionUncheckedUpdateWithoutTasksInput>
    create: XOR<RiskPositionCreateWithoutTasksInput, RiskPositionUncheckedCreateWithoutTasksInput>
    where?: RiskPositionWhereInput
  }

  export type RiskPositionUpdateToOneWithWhereWithoutTasksInput = {
    where?: RiskPositionWhereInput
    data: XOR<RiskPositionUpdateWithoutTasksInput, RiskPositionUncheckedUpdateWithoutTasksInput>
  }

  export type RiskPositionUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: OutcomeUpdateOneWithoutRiskPositionsNestedInput
  }

  export type RiskPositionUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    outcomeId?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketCreateManyEventInput = {
    id?: string
    platform: string
    externalId: string
    startTime: Date | string
    betType?: string
    line?: number | null
    mainLine?: boolean
    status?: string
    createdAt?: Date | string
  }

  export type CanonicalBetCreateManyEventInput = {
    id?: string
    key: string
    betType: string
    side: string
    line?: number | null
    createdAt?: Date | string
  }

  export type MarketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUpdateManyWithoutMarketNestedInput
    trades?: TradeUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutMarketNestedInput
    trades?: TradeUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    betType?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    mainLine?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CanonicalBetUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUpdateManyWithoutCanonicalBetNestedInput
  }

  export type CanonicalBetUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomes?: OutcomeUncheckedUpdateManyWithoutCanonicalBetNestedInput
  }

  export type CanonicalBetUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    line?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateManyMarketInput = {
    id?: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
    canonicalBetId?: string | null
  }

  export type TradeCreateManyMarketInput = {
    id?: string
    createdAt?: Date | string
    outcomeId: string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
  }

  export type OutcomeUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBet?: CanonicalBetUpdateOneWithoutOutcomesNestedInput
    trades?: TradeUpdateManyWithoutOutcomeNestedInput
    riskPositions?: RiskPositionUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBetId?: NullableStringFieldUpdateOperationsInput | string | null
    trades?: TradeUncheckedUpdateManyWithoutOutcomeNestedInput
    riskPositions?: RiskPositionUncheckedUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    canonicalBetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TradeUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    outcome?: OutcomeUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomeId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TradeUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcomeId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TradeCreateManyOutcomeInput = {
    id?: string
    createdAt?: Date | string
    marketId: string
    side: string
    requestedSize: number
    executedSize?: number | null
    requestedOdds: number
    fillOdds?: number | null
    platform: string
    txHash?: string | null
    status: string
    failureReason?: string | null
  }

  export type RiskPositionCreateManyOutcomeInput = {
    id?: string
    platform?: string
    tokenId: string
    title: string
    sideLabel: string
    avgEntryCents: number
    sizeShares: number
    costUsd: number
    highWaterCents: number
    stopLossPct: number
    source?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeUpdateWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    market?: MarketUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TradeUncheckedUpdateManyWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketId?: StringFieldUpdateOperationsInput | string
    side?: StringFieldUpdateOperationsInput | string
    requestedSize?: FloatFieldUpdateOperationsInput | number
    executedSize?: NullableFloatFieldUpdateOperationsInput | number | null
    requestedOdds?: FloatFieldUpdateOperationsInput | number
    fillOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    platform?: StringFieldUpdateOperationsInput | string
    txHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RiskPositionUpdateWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: RiskTaskUpdateManyWithoutPositionNestedInput
  }

  export type RiskPositionUncheckedUpdateWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: RiskTaskUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type RiskPositionUncheckedUpdateManyWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sideLabel?: StringFieldUpdateOperationsInput | string
    avgEntryCents?: FloatFieldUpdateOperationsInput | number
    sizeShares?: FloatFieldUpdateOperationsInput | number
    costUsd?: FloatFieldUpdateOperationsInput | number
    highWaterCents?: FloatFieldUpdateOperationsInput | number
    stopLossPct?: FloatFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutcomeCreateManyCanonicalBetInput = {
    id?: string
    marketId: string
    label: string
    externalId?: string | null
    currentOdds: number
    liquidityDepth: number
    liquidityLevels?: string | null
    lastUpdated?: Date | string
  }

  export type OutcomeUpdateWithoutCanonicalBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketUpdateOneRequiredWithoutOutcomesNestedInput
    trades?: TradeUpdateManyWithoutOutcomeNestedInput
    riskPositions?: RiskPositionUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateWithoutCanonicalBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutOutcomeNestedInput
    riskPositions?: RiskPositionUncheckedUpdateManyWithoutOutcomeNestedInput
  }

  export type OutcomeUncheckedUpdateManyWithoutCanonicalBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    currentOdds?: FloatFieldUpdateOperationsInput | number
    liquidityDepth?: FloatFieldUpdateOperationsInput | number
    liquidityLevels?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskTaskCreateManyPositionInput = {
    id?: string
    type: string
    status?: string
    attempts?: number
    lastError?: string | null
    nextRunAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskTaskUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskTaskUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskTaskUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}