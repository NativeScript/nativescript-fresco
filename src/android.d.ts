declare module bolts {
	export class AggregateException extends java.lang.Exception {
		public static class: java.lang.Class<bolts.AggregateException>;
		public constructor();
		public constructor(param0: string, param1: java.util.List<any>);
		public printStackTrace(param0: java.io.PrintStream): void;
		public printStackTrace(param0: java.io.PrintWriter): void;
		public constructor(param0: string, param1: native.Array<java.lang.Throwable>);
		public getErrors(): java.util.List<java.lang.Exception>;
		public constructor(param0: java.lang.Throwable);
		public getCauses(): native.Array<java.lang.Throwable>;
		public constructor(param0: string, param1: java.lang.Throwable);
		public getInnerThrowables(): java.util.List<java.lang.Throwable>;
		public constructor(param0: java.util.List<any>);
		public printStackTrace(): void;
		public constructor(param0: string);
	}
}

declare module bolts {
	export class AndroidExecutors extends java.lang.Object {
		public static class: java.lang.Class<bolts.AndroidExecutors>;
		public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
		public static newCachedThreadPool(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
		public static allowCoreThreadTimeout(param0: java.util.concurrent.ThreadPoolExecutor, param1: boolean): void;
		public static uiThread(): java.util.concurrent.Executor;
	}
	export module AndroidExecutors {
		export class UIThreadExecutor extends java.lang.Object implements java.util.concurrent.Executor {
			public static class: java.lang.Class<bolts.AndroidExecutors.UIThreadExecutor>;
			public execute(param0: java.lang.Runnable): void;
		}
	}
}

declare module bolts {
	export class BoltsExecutors extends java.lang.Object {
		public static class: java.lang.Class<bolts.BoltsExecutors>;
		public static background(): java.util.concurrent.ExecutorService;
	}
	export module BoltsExecutors {
		export class ImmediateExecutor extends java.lang.Object implements java.util.concurrent.Executor {
			public static class: java.lang.Class<bolts.BoltsExecutors.ImmediateExecutor>;
			public execute(param0: java.lang.Runnable): void;
		}
	}
}

declare module bolts {
	export class CancellationToken extends java.lang.Object {
		public static class: java.lang.Class<bolts.CancellationToken>;
		public isCancellationRequested(): boolean;
		public toString(): string;
		public throwIfCancellationRequested(): void;
		public register(param0: java.lang.Runnable): bolts.CancellationTokenRegistration;
	}
}

declare module bolts {
	export class CancellationTokenRegistration extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<bolts.CancellationTokenRegistration>;
		public close(): void;
	}
}

declare module bolts {
	export class CancellationTokenSource extends java.lang.Object implements java.io.Closeable {
		public static class: java.lang.Class<bolts.CancellationTokenSource>;
		public constructor();
		public close(): void;
		public isCancellationRequested(): boolean;
		public cancelAfter(param0: number): void;
		public toString(): string;
		public getToken(): bolts.CancellationToken;
		public cancel(): void;
	}
}

declare module bolts {
	export class Capture<T>  extends java.lang.Object {
		public static class: java.lang.Class<bolts.Capture<any>>;
		public constructor();
		public get(): T;
		public set(param0: T): void;
		public constructor(param0: T);
	}
}

declare module bolts {
	export class Continuation<TTaskResult, TContinuationResult>  extends java.lang.Object {
		public static class: java.lang.Class<bolts.Continuation<any,any>>;
		/**
		 * Constructs a new instance of the bolts.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			then(param0: bolts.Task<TTaskResult>): TContinuationResult;
		});
		public constructor();
		public then(param0: bolts.Task<TTaskResult>): TContinuationResult;
	}
}

declare module bolts {
	export class ExecutorException extends java.lang.RuntimeException {
		public static class: java.lang.Class<bolts.ExecutorException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: java.lang.Exception);
		public constructor(param0: string);
	}
}

declare module bolts {
	export class Task<TResult>  extends java.lang.Object {
		public static class: java.lang.Class<bolts.Task<any>>;
		public static BACKGROUND_EXECUTOR: java.util.concurrent.ExecutorService;
		public static UI_THREAD_EXECUTOR: java.util.concurrent.Executor;
		public continueWith(param0: bolts.Continuation<any,any>, param1: bolts.CancellationToken): bolts.Task<any>;
		public getResult(): TResult;
		public static whenAllResult(param0: java.util.Collection<any>): bolts.Task<any>;
		public static forError(param0: java.lang.Exception): bolts.Task<any>;
		public static getUnobservedExceptionHandler(): bolts.Task.UnobservedExceptionHandler;
		public getError(): java.lang.Exception;
		public static call(param0: java.util.concurrent.Callable<any>, param1: bolts.CancellationToken): bolts.Task<any>;
		public static cancelled(): bolts.Task<any>;
		public static forResult(param0: any): bolts.Task<any>;
		public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task<any>;
		public static call(param0: java.util.concurrent.Callable<any>): bolts.Task<any>;
		public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: bolts.Continuation<java.lang.Void,bolts.Task<java.lang.Void>>, param2: bolts.CancellationToken): bolts.Task<java.lang.Void>;
		public continueWithTask(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task<any>;
		public static delay(param0: number): bolts.Task<java.lang.Void>;
		public static delay(param0: number, param1: bolts.CancellationToken): bolts.Task<java.lang.Void>;
		public onSuccessTask(param0: bolts.Continuation<any,any>): bolts.Task<any>;
		public static create(): bolts.Task.TaskCompletionSource;
		public static callInBackground(param0: java.util.concurrent.Callable<any>): bolts.Task<any>;
		public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: bolts.Continuation<java.lang.Void,bolts.Task<java.lang.Void>>, param2: java.util.concurrent.Executor, param3: bolts.CancellationToken): bolts.Task<java.lang.Void>;
		public static setUnobservedExceptionHandler(param0: bolts.Task.UnobservedExceptionHandler): void;
		public continueWithTask(param0: bolts.Continuation<any,any>): bolts.Task<any>;
		public onSuccessTask(param0: bolts.Continuation<any,any>, param1: bolts.CancellationToken): bolts.Task<any>;
		public onSuccess(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): bolts.Task<any>;
		public onSuccess(param0: bolts.Continuation<any,any>, param1: bolts.CancellationToken): bolts.Task<any>;
		public continueWith(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): bolts.Task<any>;
		public makeVoid(): bolts.Task<java.lang.Void>;
		public continueWith(param0: bolts.Continuation<any,any>): bolts.Task<any>;
		public continueWith(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task<any>;
		public cast(): bolts.Task<any>;
		public static call(param0: java.util.concurrent.Callable<any>, param1: java.util.concurrent.Executor): bolts.Task<any>;
		public onSuccess(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task<any>;
		public isFaulted(): boolean;
		public isCancelled(): boolean;
		public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: bolts.Continuation<java.lang.Void,bolts.Task<java.lang.Void>>, param2: java.util.concurrent.Executor): bolts.Task<java.lang.Void>;
		public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: bolts.Continuation<java.lang.Void,bolts.Task<java.lang.Void>>): bolts.Task<java.lang.Void>;
		public static whenAny(param0: java.util.Collection<any>): bolts.Task<bolts.Task<any>>;
		public static callInBackground(param0: java.util.concurrent.Callable<any>, param1: bolts.CancellationToken): bolts.Task<any>;
		public static whenAll(param0: java.util.Collection<any>): bolts.Task<java.lang.Void>;
		public waitForCompletion(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
		public onSuccessTask(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): bolts.Task<any>;
		public waitForCompletion(): void;
		public isCompleted(): boolean;
		public onSuccess(param0: bolts.Continuation<any,any>): bolts.Task<any>;
		public onSuccessTask(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: bolts.CancellationToken): bolts.Task<any>;
		public static whenAnyResult(param0: java.util.Collection<any>): bolts.Task<any>;
		public continueWithTask(param0: bolts.Continuation<any,any>, param1: java.util.concurrent.Executor): bolts.Task<any>;
		public continueWithTask(param0: bolts.Continuation<any,any>, param1: bolts.CancellationToken): bolts.Task<any>;
	}
	export module Task {
		export class TaskCompletionSource extends bolts.TaskCompletionSource<any> {
			public static class: java.lang.Class<bolts.Task.TaskCompletionSource>;
		}
		export class UnobservedExceptionHandler extends java.lang.Object {
			public static class: java.lang.Class<bolts.Task.UnobservedExceptionHandler>;
			/**
			 * Constructs a new instance of the bolts.Task$UnobservedExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				unobservedException(param0: bolts.Task<any>, param1: bolts.UnobservedTaskException): void;
			});
			public constructor();
			public unobservedException(param0: bolts.Task<any>, param1: bolts.UnobservedTaskException): void;
		}
	}
}

declare module bolts {
	export class TaskCompletionSource<TResult>  extends java.lang.Object {
		public static class: java.lang.Class<bolts.TaskCompletionSource<any>>;
		public constructor();
		public getTask(): bolts.Task<TResult>;
		public trySetCancelled(): boolean;
		public setError(param0: java.lang.Exception): void;
		public setResult(param0: TResult): void;
		public trySetError(param0: java.lang.Exception): boolean;
		public setCancelled(): void;
		public trySetResult(param0: TResult): boolean;
	}
}

declare module bolts {
	export class UnobservedErrorNotifier extends java.lang.Object {
		public static class: java.lang.Class<bolts.UnobservedErrorNotifier>;
		public setObserved(): void;
		public finalize(): void;
		public constructor(param0: bolts.Task<any>);
	}
}

declare module bolts {
	export class UnobservedTaskException extends java.lang.RuntimeException {
		public static class: java.lang.Class<bolts.UnobservedTaskException>;
		public constructor();
		public constructor(param0: string, param1: java.lang.Throwable);
		public constructor(param0: java.lang.Throwable);
		public constructor(param0: string);
	}
}

declare module com {
	export module facebook {
		export module animated {
			export module drawable {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.animated.drawable.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module animated {
			export module gif {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.animated.gif.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module animated {
			export module gif {
				export class GifFrame extends java.lang.Object implements com.facebook.imagepipeline.animated.base.AnimatedImageFrame {
					public static class: java.lang.Class<com.facebook.animated.gif.GifFrame>;
					public getYOffset(): number;
					public getTransparentPixelColor(): number;
					public getDurationMs(): number;
					public getHeight(): number;
					public finalize(): void;
					public dispose(): void;
					public getDisposalMode(): number;
					public getWidth(): number;
					public getXOffset(): number;
					public renderFrame(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): void;
					public hasTransparency(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module animated {
			export module gif {
				export class GifImage extends java.lang.Object implements com.facebook.imagepipeline.animated.base.AnimatedImage, com.facebook.imagepipeline.animated.factory.AnimatedImageDecoder {
					public static class: java.lang.Class<com.facebook.animated.gif.GifImage>;
					public doesRenderSupportScaling(): boolean;
					public static create(param0: number, param1: number): com.facebook.animated.gif.GifImage;
					public getFrame(param0: number): com.facebook.imagepipeline.animated.base.AnimatedImageFrame;
					public getHeight(): number;
					public finalize(): void;
					public dispose(): void;
					public getWidth(): number;
					public getLoopCount(): number;
					public getFrame(param0: number): com.facebook.animated.gif.GifFrame;
					public getSizeInBytes(): number;
					public decode(param0: number, param1: number): com.facebook.imagepipeline.animated.base.AnimatedImage;
					public getDuration(): number;
					public constructor();
					public static create(param0: native.Array<number>): com.facebook.animated.gif.GifImage;
					public getFrameDurations(): native.Array<number>;
					public getFrameCount(): number;
					public getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module binaryresource {
			export class BinaryResource extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.binaryresource.BinaryResource>;
				/**
				 * Constructs a new instance of the com.facebook.binaryresource.BinaryResource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					openStream(): java.io.InputStream;
					read(): native.Array<number>;
					size(): number;
				});
				public constructor();
				public read(): native.Array<number>;
				public openStream(): java.io.InputStream;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module binaryresource {
			export class ByteArrayBinaryResource extends java.lang.Object implements com.facebook.binaryresource.BinaryResource {
				public static class: java.lang.Class<com.facebook.binaryresource.ByteArrayBinaryResource>;
				public constructor(param0: native.Array<number>);
				public read(): native.Array<number>;
				public openStream(): java.io.InputStream;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module binaryresource {
			export class FileBinaryResource extends java.lang.Object implements com.facebook.binaryresource.BinaryResource {
				public static class: java.lang.Class<com.facebook.binaryresource.FileBinaryResource>;
				public static createOrNull(param0: java.io.File): com.facebook.binaryresource.FileBinaryResource;
				public read(): native.Array<number>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getFile(): java.io.File;
				public openStream(): java.io.InputStream;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class BaseCacheEventListener extends java.lang.Object implements com.facebook.cache.common.CacheEventListener {
					public static class: java.lang.Class<com.facebook.cache.common.BaseCacheEventListener>;
					public onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
					public constructor();
					public onHit(param0: com.facebook.cache.common.CacheEvent): void;
					public onCleared(): void;
					public onMiss(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
					public onEviction(param0: com.facebook.cache.common.CacheEvent): void;
					public onReadException(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class CacheErrorLogger extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.CacheErrorLogger>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						logError(param0: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
					});
					public constructor();
					public logError(param0: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
				}
				export module CacheErrorLogger {
					export class CacheErrorCategory {
						public static class: java.lang.Class<com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory>;
						public static READ_DECODE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static READ_FILE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static READ_FILE_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static READ_INVALID_ENTRY: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_ENCODE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_CREATE_TEMPFILE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_UPDATE_FILE_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_RENAME_FILE_TEMPFILE_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_RENAME_FILE_TEMPFILE_PARENT_NOT_FOUND: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_RENAME_FILE_OTHER: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_CREATE_DIR: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_CALLBACK_ERROR: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static WRITE_INVALID_ENTRY: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static DELETE_FILE: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static EVICTION: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static GENERIC_IO: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static OTHER: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory>;
						public static valueOf(param0: string): com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class CacheEvent extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.CacheEvent>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCacheKey(): com.facebook.cache.common.CacheKey;
						getResourceId(): string;
						getItemSize(): number;
						getCacheSize(): number;
						getCacheLimit(): number;
						getException(): java.io.IOException;
						getEvictionReason(): com.facebook.cache.common.CacheEventListener.EvictionReason;
					});
					public constructor();
					public getCacheLimit(): number;
					public getCacheKey(): com.facebook.cache.common.CacheKey;
					public getItemSize(): number;
					public getCacheSize(): number;
					public getException(): java.io.IOException;
					public getResourceId(): string;
					public getEvictionReason(): com.facebook.cache.common.CacheEventListener.EvictionReason;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class CacheEventListener extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.CacheEventListener>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHit(param0: com.facebook.cache.common.CacheEvent): void;
						onMiss(param0: com.facebook.cache.common.CacheEvent): void;
						onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
						onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
						onReadException(param0: com.facebook.cache.common.CacheEvent): void;
						onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
						onEviction(param0: com.facebook.cache.common.CacheEvent): void;
						onCleared(): void;
					});
					public constructor();
					public onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
					public onHit(param0: com.facebook.cache.common.CacheEvent): void;
					public onCleared(): void;
					public onMiss(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
					public onEviction(param0: com.facebook.cache.common.CacheEvent): void;
					public onReadException(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
				}
				export module CacheEventListener {
					export class EvictionReason {
						public static class: java.lang.Class<com.facebook.cache.common.CacheEventListener.EvictionReason>;
						public static CACHE_FULL: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static CONTENT_STALE: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static USER_FORCED: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static CACHE_MANAGER_TRIMMED: com.facebook.cache.common.CacheEventListener.EvictionReason;
						public static values(): native.Array<com.facebook.cache.common.CacheEventListener.EvictionReason>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.facebook.cache.common.CacheEventListener.EvictionReason;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class CacheKey extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.CacheKey>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.CacheKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						toString(): string;
						equals(param0: any): boolean;
						hashCode(): number;
						containsUri(param0: globalAndroid.net.Uri): boolean;
						getUriString(): string;
					});
					public constructor();
					public equals(param0: any): boolean;
					public getUriString(): string;
					public toString(): string;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class CacheKeyUtil extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.CacheKeyUtil>;
					public static getFirstResourceId(param0: com.facebook.cache.common.CacheKey): string;
					public constructor();
					public static getResourceIds(param0: com.facebook.cache.common.CacheKey): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class DebuggingCacheKey extends com.facebook.cache.common.SimpleCacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.DebuggingCacheKey>;
					public equals(param0: any): boolean;
					public getUriString(): string;
					public toString(): string;
					public constructor(param0: string);
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public getCallerContext(): any;
					public hashCode(): number;
					public constructor(param0: string, param1: any, param2: globalAndroid.net.Uri);
					public getSourceUri(): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class MultiCacheKey extends java.lang.Object implements com.facebook.cache.common.CacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.MultiCacheKey>;
					public equals(param0: any): boolean;
					public getUriString(): string;
					public toString(): string;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public getCacheKeys(): java.util.List<com.facebook.cache.common.CacheKey>;
					public hashCode(): number;
					public constructor(param0: java.util.List<com.facebook.cache.common.CacheKey>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class NoOpCacheErrorLogger extends java.lang.Object implements com.facebook.cache.common.CacheErrorLogger {
					public static class: java.lang.Class<com.facebook.cache.common.NoOpCacheErrorLogger>;
					public logError(param0: com.facebook.cache.common.CacheErrorLogger.CacheErrorCategory, param1: java.lang.Class<any>, param2: string, param3: java.lang.Throwable): void;
					public static getInstance(): com.facebook.cache.common.NoOpCacheErrorLogger;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class NoOpCacheEventListener extends java.lang.Object implements com.facebook.cache.common.CacheEventListener {
					public static class: java.lang.Class<com.facebook.cache.common.NoOpCacheEventListener>;
					public onWriteAttempt(param0: com.facebook.cache.common.CacheEvent): void;
					public static getInstance(): com.facebook.cache.common.NoOpCacheEventListener;
					public onHit(param0: com.facebook.cache.common.CacheEvent): void;
					public onCleared(): void;
					public onMiss(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteException(param0: com.facebook.cache.common.CacheEvent): void;
					public onEviction(param0: com.facebook.cache.common.CacheEvent): void;
					public onReadException(param0: com.facebook.cache.common.CacheEvent): void;
					public onWriteSuccess(param0: com.facebook.cache.common.CacheEvent): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class SimpleCacheKey extends java.lang.Object implements com.facebook.cache.common.CacheKey {
					public static class: java.lang.Class<com.facebook.cache.common.SimpleCacheKey>;
					public equals(param0: any): boolean;
					public getUriString(): string;
					public toString(): string;
					public constructor(param0: string);
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class WriterCallback extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.WriterCallback>;
					/**
					 * Constructs a new instance of the com.facebook.cache.common.WriterCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						write(param0: java.io.OutputStream): void;
					});
					public constructor();
					public write(param0: java.io.OutputStream): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module common {
				export class WriterCallbacks extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.common.WriterCallbacks>;
					public static from(param0: native.Array<number>): com.facebook.cache.common.WriterCallback;
					public constructor();
					public static from(param0: java.io.InputStream): com.facebook.cache.common.WriterCallback;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class DefaultDiskStorage extends java.lang.Object implements com.facebook.cache.disk.DiskStorage {
					public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage>;
					public getStorageName(): string;
					public purgeUnexpectedResources(): void;
					public insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
					public getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
					public contains(param0: string, param1: any): boolean;
					public isExternal(): boolean;
					public touch(param0: string, param1: any): boolean;
					public getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
					public remove(param0: string): number;
					public constructor(param0: java.io.File, param1: number, param2: com.facebook.cache.common.CacheErrorLogger);
					public clearAll(): void;
					public isEnabled(): boolean;
					public getEntries(): java.util.List<com.facebook.cache.disk.DiskStorage.Entry>;
				}
				export module DefaultDiskStorage {
					export class EntriesCollector extends java.lang.Object implements com.facebook.common.file.FileTreeVisitor {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.EntriesCollector>;
						public visitFile(param0: java.io.File): void;
						public getEntries(): java.util.List<com.facebook.cache.disk.DiskStorage.Entry>;
						public postVisitDirectory(param0: java.io.File): void;
						public preVisitDirectory(param0: java.io.File): void;
					}
					export class EntryImpl extends java.lang.Object implements com.facebook.cache.disk.DiskStorage.Entry {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.EntryImpl>;
						public getSize(): number;
						public getTimestamp(): number;
						public getResource(): com.facebook.binaryresource.BinaryResource;
						public getId(): string;
						public getResource(): com.facebook.binaryresource.FileBinaryResource;
					}
					export class FileInfo extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.FileInfo>;
						public type: string;
						public resourceId: string;
						public static fromFile(param0: java.io.File): com.facebook.cache.disk.DefaultDiskStorage.FileInfo;
						public toPath(param0: string): string;
						public createTempFile(param0: java.io.File): java.io.File;
						public toString(): string;
					}
					export class FileType extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.FileType>;
						/**
						 * Constructs a new instance of the com.facebook.cache.disk.DefaultDiskStorage$FileType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							annotationType(): java.lang.Class<any>;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
						});
						public constructor();
						public static TEMP: string;
						public static CONTENT: string;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class IncompleteFileException extends java.io.IOException {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.IncompleteFileException>;
						public expected: number;
						public actual: number;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: number, param1: number);
						public constructor(param0: string);
					}
					export class InserterImpl extends java.lang.Object implements com.facebook.cache.disk.DiskStorage.Inserter {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.InserterImpl>;
						public constructor(param0: com.facebook.cache.disk.DefaultDiskStorage, param1: string, param2: java.io.File);
						public commit(param0: any): com.facebook.binaryresource.BinaryResource;
						public writeData(param0: com.facebook.cache.common.WriterCallback, param1: any): void;
						public cleanUp(): boolean;
					}
					export class PurgingVisitor extends java.lang.Object implements com.facebook.common.file.FileTreeVisitor {
						public static class: java.lang.Class<com.facebook.cache.disk.DefaultDiskStorage.PurgingVisitor>;
						public visitFile(param0: java.io.File): void;
						public postVisitDirectory(param0: java.io.File): void;
						public preVisitDirectory(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class DefaultEntryEvictionComparatorSupplier extends java.lang.Object implements com.facebook.cache.disk.EntryEvictionComparatorSupplier {
					public static class: java.lang.Class<com.facebook.cache.disk.DefaultEntryEvictionComparatorSupplier>;
					public constructor();
					public get(): com.facebook.cache.disk.EntryEvictionComparator;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class DiskCacheConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.disk.DiskCacheConfig>;
					public getIndexPopulateAtStartupEnabled(): boolean;
					public static newBuilder(param0: globalAndroid.content.Context): com.facebook.cache.disk.DiskCacheConfig.Builder;
					public getVersion(): number;
					public getMinimumSizeLimit(): number;
					public getCacheErrorLogger(): com.facebook.cache.common.CacheErrorLogger;
					public getEntryEvictionComparatorSupplier(): com.facebook.cache.disk.EntryEvictionComparatorSupplier;
					public getBaseDirectoryPathSupplier(): com.facebook.common.internal.Supplier<java.io.File>;
					public getDefaultSizeLimit(): number;
					public getLowDiskSpaceSizeLimit(): number;
					public getCacheEventListener(): com.facebook.cache.common.CacheEventListener;
					public getDiskTrimmableRegistry(): com.facebook.common.disk.DiskTrimmableRegistry;
					public getBaseDirectoryName(): string;
					public getContext(): globalAndroid.content.Context;
				}
				export module DiskCacheConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskCacheConfig.Builder>;
						public setMaxCacheSize(param0: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setBaseDirectoryName(param0: string): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public build(): com.facebook.cache.disk.DiskCacheConfig;
						public setDiskTrimmableRegistry(param0: com.facebook.common.disk.DiskTrimmableRegistry): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setVersion(param0: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setCacheErrorLogger(param0: com.facebook.cache.common.CacheErrorLogger): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setEntryEvictionComparatorSupplier(param0: com.facebook.cache.disk.EntryEvictionComparatorSupplier): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setMaxCacheSizeOnVeryLowDiskSpace(param0: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setIndexPopulateAtStartupEnabled(param0: boolean): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setBaseDirectoryPath(param0: java.io.File): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setBaseDirectoryPathSupplier(param0: com.facebook.common.internal.Supplier<java.io.File>): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setMaxCacheSizeOnLowDiskSpace(param0: number): com.facebook.cache.disk.DiskCacheConfig.Builder;
						public setCacheEventListener(param0: com.facebook.cache.common.CacheEventListener): com.facebook.cache.disk.DiskCacheConfig.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class DiskStorage extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isEnabled(): boolean;
						isExternal(): boolean;
						getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
						contains(param0: string, param1: any): boolean;
						touch(param0: string, param1: any): boolean;
						purgeUnexpectedResources(): void;
						insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
						getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
						remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
						remove(param0: string): number;
						clearAll(): void;
						getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
						getStorageName(): string;
					});
					public constructor();
					public purgeUnexpectedResources(): void;
					public insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public getStorageName(): string;
					public remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
					public getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
					public contains(param0: string, param1: any): boolean;
					public isExternal(): boolean;
					public touch(param0: string, param1: any): boolean;
					public getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
					public remove(param0: string): number;
					public clearAll(): void;
					public isEnabled(): boolean;
				}
				export module DiskStorage {
					export class DiskDumpInfo extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.DiskDumpInfo>;
						public entries: java.util.List<com.facebook.cache.disk.DiskStorage.DiskDumpInfoEntry>;
						public typeCounts: java.util.Map<string,java.lang.Integer>;
						public constructor();
					}
					export class DiskDumpInfoEntry extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.DiskDumpInfoEntry>;
						public path: string;
						public type: string;
						public size: number;
						public firstBits: string;
						public constructor(param0: string, param1: string, param2: number, param3: string);
					}
					export class Entry extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.Entry>;
						/**
						 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Entry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getId(): string;
							getTimestamp(): number;
							getSize(): number;
							getResource(): com.facebook.binaryresource.BinaryResource;
						});
						public constructor();
						public getSize(): number;
						public getTimestamp(): number;
						public getResource(): com.facebook.binaryresource.BinaryResource;
						public getId(): string;
					}
					export class Inserter extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorage.Inserter>;
						/**
						 * Constructs a new instance of the com.facebook.cache.disk.DiskStorage$Inserter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							writeData(param0: com.facebook.cache.common.WriterCallback, param1: any): void;
							commit(param0: any): com.facebook.binaryresource.BinaryResource;
							cleanUp(): boolean;
						});
						public constructor();
						public commit(param0: any): com.facebook.binaryresource.BinaryResource;
						public writeData(param0: com.facebook.cache.common.WriterCallback, param1: any): void;
						public cleanUp(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class DiskStorageCache extends java.lang.Object implements com.facebook.cache.disk.FileCache, com.facebook.common.disk.DiskTrimmable {
					public static class: java.lang.Class<com.facebook.cache.disk.DiskStorageCache>;
					public static START_OF_VERSIONING: number;
					public hasKey(param0: com.facebook.cache.common.CacheKey): boolean;
					public awaitIndex(): void;
					public isIndexReady(): boolean;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public probe(param0: com.facebook.cache.common.CacheKey): boolean;
					public getCount(): number;
					public constructor(param0: com.facebook.cache.disk.DiskStorage, param1: com.facebook.cache.disk.EntryEvictionComparatorSupplier, param2: com.facebook.cache.disk.DiskStorageCache.Params, param3: com.facebook.cache.common.CacheEventListener, param4: com.facebook.cache.common.CacheErrorLogger, param5: com.facebook.common.disk.DiskTrimmableRegistry, param6: globalAndroid.content.Context, param7: java.util.concurrent.Executor, param8: boolean);
					public trimToNothing(): void;
					public hasKeySync(param0: com.facebook.cache.common.CacheKey): boolean;
					public getSize(): number;
					public remove(param0: com.facebook.cache.common.CacheKey): void;
					public trimToMinimum(): void;
					public getResource(param0: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
					public insert(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
					public clearOldEntries(param0: number): number;
					public clearAll(): void;
					public isEnabled(): boolean;
				}
				export module DiskStorageCache {
					export class CacheStats extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorageCache.CacheStats>;
						public increment(param0: number, param1: number): void;
						public getSize(): number;
						public set(param0: number, param1: number): void;
						public getCount(): number;
						public reset(): void;
						public isInitialized(): boolean;
					}
					export class Params extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DiskStorageCache.Params>;
						public mCacheSizeLimitMinimum: number;
						public mLowDiskSpaceCacheSizeLimit: number;
						public mDefaultCacheSizeLimit: number;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class DynamicDefaultDiskStorage extends java.lang.Object implements com.facebook.cache.disk.DiskStorage {
					public static class: java.lang.Class<com.facebook.cache.disk.DynamicDefaultDiskStorage>;
					public getStorageName(): string;
					public purgeUnexpectedResources(): void;
					public insert(param0: string, param1: any): com.facebook.cache.disk.DiskStorage.Inserter;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public remove(param0: com.facebook.cache.disk.DiskStorage.Entry): number;
					public getResource(param0: string, param1: any): com.facebook.binaryresource.BinaryResource;
					public contains(param0: string, param1: any): boolean;
					public isExternal(): boolean;
					public touch(param0: string, param1: any): boolean;
					public getEntries(): java.util.Collection<com.facebook.cache.disk.DiskStorage.Entry>;
					public remove(param0: string): number;
					public clearAll(): void;
					public isEnabled(): boolean;
					public constructor(param0: number, param1: com.facebook.common.internal.Supplier<java.io.File>, param2: string, param3: com.facebook.cache.common.CacheErrorLogger);
				}
				export module DynamicDefaultDiskStorage {
					export class State extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.cache.disk.DynamicDefaultDiskStorage.State>;
						public delegate: com.facebook.cache.disk.DiskStorage;
						public rootDirectory: java.io.File;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class EntryEvictionComparator extends java.util.Comparator<com.facebook.cache.disk.DiskStorage.Entry> {
					public static class: java.lang.Class<com.facebook.cache.disk.EntryEvictionComparator>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						compare(param0: any, param1: any): number;
						equals(param0: any): boolean;
					});
					public constructor();
					public equals(param0: any): boolean;
					public compare(param0: any, param1: any): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class EntryEvictionComparatorSupplier extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.cache.disk.EntryEvictionComparatorSupplier>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.EntryEvictionComparatorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): com.facebook.cache.disk.EntryEvictionComparator;
					});
					public constructor();
					public get(): com.facebook.cache.disk.EntryEvictionComparator;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class FileCache extends java.lang.Object implements com.facebook.common.disk.DiskTrimmable {
					public static class: java.lang.Class<com.facebook.cache.disk.FileCache>;
					/**
					 * Constructs a new instance of the com.facebook.cache.disk.FileCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isEnabled(): boolean;
						getResource(param0: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
						hasKeySync(param0: com.facebook.cache.common.CacheKey): boolean;
						hasKey(param0: com.facebook.cache.common.CacheKey): boolean;
						probe(param0: com.facebook.cache.common.CacheKey): boolean;
						insert(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
						remove(param0: com.facebook.cache.common.CacheKey): void;
						getSize(): number;
						getCount(): number;
						clearOldEntries(param0: number): number;
						clearAll(): void;
						getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
						trimToMinimum(): void;
						trimToNothing(): void;
					});
					public constructor();
					public hasKey(param0: com.facebook.cache.common.CacheKey): boolean;
					public getDumpInfo(): com.facebook.cache.disk.DiskStorage.DiskDumpInfo;
					public probe(param0: com.facebook.cache.common.CacheKey): boolean;
					public getCount(): number;
					public trimToNothing(): void;
					public hasKeySync(param0: com.facebook.cache.common.CacheKey): boolean;
					public getSize(): number;
					public remove(param0: com.facebook.cache.common.CacheKey): void;
					public trimToMinimum(): void;
					public getResource(param0: com.facebook.cache.common.CacheKey): com.facebook.binaryresource.BinaryResource;
					public insert(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.cache.common.WriterCallback): com.facebook.binaryresource.BinaryResource;
					public clearOldEntries(param0: number): number;
					public clearAll(): void;
					public isEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class ScoreBasedEvictionComparatorSupplier extends java.lang.Object implements com.facebook.cache.disk.EntryEvictionComparatorSupplier {
					public static class: java.lang.Class<com.facebook.cache.disk.ScoreBasedEvictionComparatorSupplier>;
					public get(): com.facebook.cache.disk.EntryEvictionComparator;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module cache {
			export module disk {
				export class SettableCacheEvent extends java.lang.Object implements com.facebook.cache.common.CacheEvent {
					public static class: java.lang.Class<com.facebook.cache.disk.SettableCacheEvent>;
					public getCacheLimit(): number;
					public getItemSize(): number;
					public getCacheSize(): number;
					public setEvictionReason(param0: com.facebook.cache.common.CacheEventListener.EvictionReason): com.facebook.cache.disk.SettableCacheEvent;
					public setCacheKey(param0: com.facebook.cache.common.CacheKey): com.facebook.cache.disk.SettableCacheEvent;
					public getResourceId(): string;
					public recycle(): void;
					public setResourceId(param0: string): com.facebook.cache.disk.SettableCacheEvent;
					public setCacheLimit(param0: number): com.facebook.cache.disk.SettableCacheEvent;
					public setItemSize(param0: number): com.facebook.cache.disk.SettableCacheEvent;
					public getEvictionReason(): com.facebook.cache.common.CacheEventListener.EvictionReason;
					public static obtain(): com.facebook.cache.disk.SettableCacheEvent;
					public getCacheKey(): com.facebook.cache.common.CacheKey;
					public getException(): java.io.IOException;
					public setException(param0: java.io.IOException): com.facebook.cache.disk.SettableCacheEvent;
					public setCacheSize(param0: number): com.facebook.cache.disk.SettableCacheEvent;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class ActivityListener extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.activitylistener.ActivityListener>;
					/**
					 * Constructs a new instance of the com.facebook.common.activitylistener.ActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityCreate(param0: globalAndroid.app.Activity): void;
						onStart(param0: globalAndroid.app.Activity): void;
						onResume(param0: globalAndroid.app.Activity): void;
						onPause(param0: globalAndroid.app.Activity): void;
						onStop(param0: globalAndroid.app.Activity): void;
						onDestroy(param0: globalAndroid.app.Activity): void;
						getPriority(): number;
					});
					public constructor();
					public static MIN_PRIORITY: number;
					public static MAX_PRIORITY: number;
					public getPriority(): number;
					public onStop(param0: globalAndroid.app.Activity): void;
					public onResume(param0: globalAndroid.app.Activity): void;
					public onActivityCreate(param0: globalAndroid.app.Activity): void;
					public onStart(param0: globalAndroid.app.Activity): void;
					public onDestroy(param0: globalAndroid.app.Activity): void;
					public onPause(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class ActivityListenerManager extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.activitylistener.ActivityListenerManager>;
					public constructor();
					public static register(param0: com.facebook.common.activitylistener.ActivityListener, param1: globalAndroid.content.Context): void;
				}
				export module ActivityListenerManager {
					export class Listener extends com.facebook.common.activitylistener.BaseActivityListener {
						public static class: java.lang.Class<com.facebook.common.activitylistener.ActivityListenerManager.Listener>;
						public constructor();
						public onStop(param0: globalAndroid.app.Activity): void;
						public onResume(param0: globalAndroid.app.Activity): void;
						public constructor(param0: com.facebook.common.activitylistener.ActivityListener);
						public getPriority(): number;
						public onPause(param0: globalAndroid.app.Activity): void;
						public onStart(param0: globalAndroid.app.Activity): void;
						public onDestroy(param0: globalAndroid.app.Activity): void;
						public onActivityCreate(param0: globalAndroid.app.Activity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class BaseActivityListener extends java.lang.Object implements com.facebook.common.activitylistener.ActivityListener {
					public static class: java.lang.Class<com.facebook.common.activitylistener.BaseActivityListener>;
					public getPriority(): number;
					public onStop(param0: globalAndroid.app.Activity): void;
					public onResume(param0: globalAndroid.app.Activity): void;
					public constructor();
					public onActivityCreate(param0: globalAndroid.app.Activity): void;
					public onStart(param0: globalAndroid.app.Activity): void;
					public onDestroy(param0: globalAndroid.app.Activity): void;
					public onPause(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module activitylistener {
				export class ListenableActivity extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.activitylistener.ListenableActivity>;
					/**
					 * Constructs a new instance of the com.facebook.common.activitylistener.ListenableActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
						removeActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
					});
					public constructor();
					public addActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
					public removeActivityListener(param0: com.facebook.common.activitylistener.ActivityListener): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module disk {
				export class DiskTrimmable extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.disk.DiskTrimmable>;
					/**
					 * Constructs a new instance of the com.facebook.common.disk.DiskTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trimToMinimum(): void;
						trimToNothing(): void;
					});
					public constructor();
					public trimToMinimum(): void;
					public trimToNothing(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module disk {
				export class DiskTrimmableRegistry extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.disk.DiskTrimmableRegistry>;
					/**
					 * Constructs a new instance of the com.facebook.common.disk.DiskTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
						unregisterDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					});
					public constructor();
					public unregisterDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					public registerDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module disk {
				export class NoOpDiskTrimmableRegistry extends java.lang.Object implements com.facebook.common.disk.DiskTrimmableRegistry {
					public static class: java.lang.Class<com.facebook.common.disk.NoOpDiskTrimmableRegistry>;
					public unregisterDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
					public static getInstance(): com.facebook.common.disk.NoOpDiskTrimmableRegistry;
					public registerDiskTrimmable(param0: com.facebook.common.disk.DiskTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class CallerThreadExecutor extends java.util.concurrent.AbstractExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.CallerThreadExecutor>;
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection<any>): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public static getInstance(): com.facebook.common.executors.CallerThreadExecutor;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public shutdown(): void;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class ConstrainedExecutorService extends java.util.concurrent.AbstractExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.ConstrainedExecutorService>;
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection<any>): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public constructor(param0: string, param1: number, param2: java.util.concurrent.Executor, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public shutdown(): void;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public constructor();
					public static newConstrainedExecutor(param0: string, param1: number, param2: number, param3: java.util.concurrent.Executor): com.facebook.common.executors.ConstrainedExecutorService;
					public isIdle(): boolean;
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
				}
				export module ConstrainedExecutorService {
					export class Worker extends java.lang.Object implements java.lang.Runnable {
						public static class: java.lang.Class<com.facebook.common.executors.ConstrainedExecutorService.Worker>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class DefaultSerialExecutorService extends com.facebook.common.executors.ConstrainedExecutorService implements com.facebook.common.executors.SerialExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.DefaultSerialExecutorService>;
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection<any>): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public constructor(param0: string, param1: number, param2: java.util.concurrent.Executor, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public constructor(param0: java.util.concurrent.Executor);
					public shutdown(): void;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public constructor();
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class HandlerExecutorService extends java.lang.Object implements java.util.concurrent.ScheduledExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.HandlerExecutorService>;
					/**
					 * Constructs a new instance of the com.facebook.common.executors.HandlerExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						quit(): void;
						isHandlerThread(): boolean;
						schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
						schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
						scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
						scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
						shutdown(): void;
						shutdownNow(): java.util.List<java.lang.Runnable>;
						isShutdown(): boolean;
						isTerminated(): boolean;
						awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
						submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
						submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
						invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
						invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
						invokeAny(param0: java.util.Collection<any>): any;
						invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						execute(param0: java.lang.Runnable): void;
					});
					public constructor();
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection<any>): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public isHandlerThread(): boolean;
					public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public shutdown(): void;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
					public quit(): void;
					public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class HandlerExecutorServiceImpl extends java.util.concurrent.AbstractExecutorService implements com.facebook.common.executors.HandlerExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.HandlerExecutorServiceImpl>;
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public invokeAny(param0: java.util.Collection<any>): any;
					public newTaskFor(param0: java.lang.Runnable, param1: any): com.facebook.common.executors.ScheduledFutureImpl<any>;
					public newTaskFor(param0: java.util.concurrent.Callable<any>): com.facebook.common.executors.ScheduledFutureImpl<any>;
					public schedule(param0: java.lang.Runnable, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public isShutdown(): boolean;
					public execute(param0: java.lang.Runnable): void;
					public shutdown(): void;
					public schedule(param0: java.util.concurrent.Callable<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public constructor();
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public constructor(param0: globalAndroid.os.Handler);
					public isTerminated(): boolean;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public isHandlerThread(): boolean;
					public submit(param0: java.lang.Runnable): java.util.concurrent.ScheduledFuture<any>;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.ScheduledFuture<any>;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.ScheduledFuture<any>;
					public scheduleAtFixedRate(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public newTaskFor(param0: java.lang.Runnable, param1: any): java.util.concurrent.RunnableFuture<any>;
					public newTaskFor(param0: java.util.concurrent.Callable<any>): java.util.concurrent.RunnableFuture<any>;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
					public scheduleWithFixedDelay(param0: java.lang.Runnable, param1: number, param2: number, param3: java.util.concurrent.TimeUnit): java.util.concurrent.ScheduledFuture<any>;
					public quit(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class ScheduledFutureImpl<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.executors.ScheduledFutureImpl<any>>;
					public compareTo(param0: java.util.concurrent.Delayed): number;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): V;
					public isDone(): boolean;
					public run(): void;
					public isCancelled(): boolean;
					public constructor(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Callable<V>);
					public constructor(param0: globalAndroid.os.Handler, param1: java.lang.Runnable, param2: V);
					public cancel(param0: boolean): boolean;
					public getDelay(param0: java.util.concurrent.TimeUnit): number;
					public get(): V;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class SerialExecutorService extends java.lang.Object implements java.util.concurrent.ExecutorService {
					public static class: java.lang.Class<com.facebook.common.executors.SerialExecutorService>;
					/**
					 * Constructs a new instance of the com.facebook.common.executors.SerialExecutorService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shutdown(): void;
						shutdownNow(): java.util.List<java.lang.Runnable>;
						isShutdown(): boolean;
						isTerminated(): boolean;
						awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
						submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
						submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
						invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
						invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
						invokeAny(param0: java.util.Collection<any>): any;
						invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						execute(param0: java.lang.Runnable): void;
					});
					public constructor();
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection<any>): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public shutdown(): void;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export abstract class StatefulRunnable<T>  extends java.lang.Runnable {
					public static class: java.lang.Class<com.facebook.common.executors.StatefulRunnable<any>>;
					public static STATE_CREATED: number;
					public static STATE_STARTED: number;
					public static STATE_CANCELLED: number;
					public static STATE_FINISHED: number;
					public static STATE_FAILED: number;
					public mState: java.util.concurrent.atomic.AtomicInteger;
					public onFailure(param0: java.lang.Exception): void;
					public onCancellation(): void;
					public constructor();
					public run(): void;
					public cancel(): void;
					public getResult(): any;
					public disposeResult(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module executors {
				export class UiThreadImmediateExecutorService extends com.facebook.common.executors.HandlerExecutorServiceImpl {
					public static class: java.lang.Class<com.facebook.common.executors.UiThreadImmediateExecutorService>;
					public invokeAll(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List<any>;
					public static getInstance(): com.facebook.common.executors.UiThreadImmediateExecutorService;
					public isTerminated(): boolean;
					public invokeAny(param0: java.util.Collection<any>): any;
					public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					public isHandlerThread(): boolean;
					public submit(param0: java.lang.Runnable): java.util.concurrent.ScheduledFuture<any>;
					public invokeAll(param0: java.util.Collection<any>): java.util.List<any>;
					public isShutdown(): boolean;
					public shutdownNow(): java.util.List<java.lang.Runnable>;
					public execute(param0: java.lang.Runnable): void;
					public shutdown(): void;
					public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.ScheduledFuture<any>;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.ScheduledFuture<any>;
					public invokeAny(param0: java.util.Collection<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
					public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
					public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
					public quit(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module file {
				export class FileTree extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.file.FileTree>;
					public static deleteContents(param0: java.io.File): boolean;
					public constructor();
					public static walkFileTree(param0: java.io.File, param1: com.facebook.common.file.FileTreeVisitor): void;
					public static deleteRecursively(param0: java.io.File): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module file {
				export class FileTreeVisitor extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.file.FileTreeVisitor>;
					/**
					 * Constructs a new instance of the com.facebook.common.file.FileTreeVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						preVisitDirectory(param0: java.io.File): void;
						visitFile(param0: java.io.File): void;
						postVisitDirectory(param0: java.io.File): void;
					});
					public constructor();
					public preVisitDirectory(param0: java.io.File): void;
					public postVisitDirectory(param0: java.io.File): void;
					public visitFile(param0: java.io.File): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module file {
				export class FileUtils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.file.FileUtils>;
					public constructor();
					public static mkdirs(param0: java.io.File): void;
					public static rename(param0: java.io.File, param1: java.io.File): void;
				}
				export module FileUtils {
					export class CreateDirectoryException extends java.io.IOException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.CreateDirectoryException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
					export class FileDeleteException extends java.io.IOException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.FileDeleteException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
					export class ParentDirNotFoundException extends java.io.FileNotFoundException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.ParentDirNotFoundException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
					export class RenameException extends java.io.IOException {
						public static class: java.lang.Class<com.facebook.common.file.FileUtils.RenameException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class AndroidPredicates extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.AndroidPredicates>;
					public static True(): com.android.internal.util.Predicate<any>;
					public static False(): com.android.internal.util.Predicate<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ByteStreams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.ByteStreams>;
					public static toByteArray(param0: java.io.InputStream): native.Array<number>;
					public static read(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): number;
					public static toByteArray(param0: java.io.InputStream, param1: number): native.Array<number>;
					public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
					public static readFully(param0: java.io.InputStream, param1: native.Array<number>, param2: number, param3: number): void;
				}
				export module ByteStreams {
					export class FastByteArrayOutputStream extends java.io.ByteArrayOutputStream {
						public static class: java.lang.Class<com.facebook.common.internal.ByteStreams.FastByteArrayOutputStream>;
						public close(): void;
						public flush(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Closeables extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Closeables>;
					public static closeQuietly(param0: java.io.InputStream): void;
					public static close(param0: java.io.Closeable, param1: boolean): void;
					public static closeQuietly(param0: java.io.Reader): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class CountingOutputStream extends java.io.FilterOutputStream {
					public static class: java.lang.Class<com.facebook.common.internal.CountingOutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public constructor(param0: java.io.OutputStream);
					public write(param0: native.Array<number>): void;
					public getCount(): number;
					public constructor();
					public close(): void;
					public write(param0: number): void;
					public flush(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class DoNotStrip extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.facebook.common.internal.DoNotStrip>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.DoNotStrip interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						annotationType(): java.lang.Class<any>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Files extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Files>;
					public static toByteArray(param0: java.io.File): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ImmutableList<E>  extends java.util.ArrayList<any> {
					public static class: java.lang.Class<com.facebook.common.internal.ImmutableList<any>>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public size(): number;
					public lastIndexOf(param0: any): number;
					public static of(param0: native.Array<any>): com.facebook.common.internal.ImmutableList<any>;
					public remove(param0: number): any;
					public iterator(): java.util.Iterator<any>;
					public toArray(param0: native.Array<any>): native.Array<any>;
					public toArray(): native.Array<any>;
					public clear(): void;
					public get(param0: number): any;
					public subList(param0: number, param1: number): java.util.List<any>;
					public listIterator(param0: number): java.util.ListIterator<any>;
					public hashCode(): number;
					public contains(param0: any): boolean;
					public static copyOf(param0: java.util.List<any>): com.facebook.common.internal.ImmutableList<any>;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public add(param0: number, param1: any): void;
					public addAll(param0: number, param1: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public indexOf(param0: any): number;
					public equals(param0: any): boolean;
					public set(param0: number, param1: any): any;
					public listIterator(): java.util.ListIterator<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ImmutableMap<K, V>  extends java.util.HashMap<any,any> {
					public static class: java.lang.Class<com.facebook.common.internal.ImmutableMap<any,any>>;
					public static of(param0: any, param1: any): java.util.Map<any,any>;
					public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): java.util.Map<any,any>;
					public isEmpty(): boolean;
					public size(): number;
					public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any,any>;
					public values(): java.util.Collection<any>;
					public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map<any,any>;
					public put(param0: any, param1: any): any;
					public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): java.util.Map<any,any>;
					public equals(param0: any): boolean;
					public putAll(param0: java.util.Map<any,any>): void;
					public static of(param0: any, param1: any, param2: any, param3: any): java.util.Map<any,any>;
					public containsKey(param0: any): boolean;
					public containsValue(param0: any): boolean;
					public remove(param0: any): any;
					public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
					public static copyOf(param0: java.util.Map<any,any>): com.facebook.common.internal.ImmutableMap<any,any>;
					public keySet(): java.util.Set<any>;
					public clear(): void;
					public static of(): java.util.Map<any,any>;
					public hashCode(): number;
					public get(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class ImmutableSet<E>  extends java.util.HashSet<any> {
					public static class: java.lang.Class<com.facebook.common.internal.ImmutableSet<any>>;
					public addAll(param0: java.util.Collection<any>): boolean;
					public remove(param0: any): boolean;
					public removeAll(param0: java.util.Collection<any>): boolean;
					public static copyOf(param0: java.util.Set<any>): com.facebook.common.internal.ImmutableSet<any>;
					public isEmpty(): boolean;
					public add(param0: any): boolean;
					public containsAll(param0: java.util.Collection<any>): boolean;
					public retainAll(param0: java.util.Collection<any>): boolean;
					public size(): number;
					public equals(param0: any): boolean;
					public iterator(): java.util.Iterator<any>;
					public static of(param0: native.Array<any>): com.facebook.common.internal.ImmutableSet<any>;
					public toArray(param0: native.Array<any>): native.Array<any>;
					public toArray(): native.Array<any>;
					public clear(): void;
					public hashCode(): number;
					public contains(param0: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Ints extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Ints>;
					public static max(param0: native.Array<number>): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Objects extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Objects>;
					public static toStringHelper(param0: string): com.facebook.common.internal.Objects.ToStringHelper;
					public static toStringHelper(param0: java.lang.Class<any>): com.facebook.common.internal.Objects.ToStringHelper;
					public static firstNonNull(param0: any, param1: any): any;
					public static hashCode(param0: native.Array<any>): number;
					public static equal(param0: any, param1: any): boolean;
					public hashCode(): number;
					public static toStringHelper(param0: any): com.facebook.common.internal.Objects.ToStringHelper;
				}
				export module Objects {
					export class ToStringHelper extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.common.internal.Objects.ToStringHelper>;
						public omitNullValues(): com.facebook.common.internal.Objects.ToStringHelper;
						public add(param0: string, param1: any): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(param0: number): com.facebook.common.internal.Objects.ToStringHelper;
						public add(param0: string, param1: boolean): com.facebook.common.internal.Objects.ToStringHelper;
						public add(param0: string, param1: number): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(param0: any): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(param0: boolean): com.facebook.common.internal.Objects.ToStringHelper;
						public addValue(param0: string): com.facebook.common.internal.Objects.ToStringHelper;
						public add(param0: string, param1: string): com.facebook.common.internal.Objects.ToStringHelper;
						public toString(): string;
					}
					export module ToStringHelper {
						export class ValueHolder extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.common.internal.Objects.ToStringHelper.ValueHolder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Preconditions extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Preconditions>;
					public static checkElementIndex(param0: number, param1: number, param2: string): number;
					public static checkState(param0: boolean, param1: any): void;
					public static checkArgument(param0: boolean, param1: any): void;
					public static checkElementIndex(param0: number, param1: number): number;
					public static checkNotNull(param0: any): any;
					public static checkNotNull(param0: any, param1: string, param2: native.Array<any>): any;
					public static checkPositionIndexes(param0: number, param1: number, param2: number): void;
					public static checkPositionIndex(param0: number, param1: number): number;
					public static checkState(param0: boolean, param1: string, param2: native.Array<any>): void;
					public static checkPositionIndex(param0: number, param1: number, param2: string): number;
					public static checkArgument(param0: boolean, param1: string, param2: native.Array<any>): void;
					public static checkState(param0: boolean): void;
					public static checkArgument(param0: boolean): void;
					public static checkNotNull(param0: any, param1: any): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Sets extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Sets>;
					public static newHashSet(): java.util.HashSet<any>;
					public static newHashSetWithCapacity(param0: number): java.util.HashSet<any>;
					public static newIdentityHashSet(): java.util.Set<any>;
					public static newHashSet(param0: java.lang.Iterable<any>): java.util.HashSet<any>;
					public static newHashSet(param0: native.Array<any>): java.util.HashSet<any>;
					public static newHashSet(param0: java.util.Iterator<any>): java.util.HashSet<any>;
					public static newCopyOnWriteArraySet(): java.util.concurrent.CopyOnWriteArraySet<any>;
					public static newLinkedHashSet(): java.util.LinkedHashSet<any>;
					public static newSetFromMap(param0: java.util.Map<any,any>): java.util.Set<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Supplier<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Supplier<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): T;
					});
					public constructor();
					public get(): T;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Suppliers extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Suppliers>;
					public static BOOLEAN_TRUE: com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public static BOOLEAN_FALSE: com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public static of(param0: any): com.facebook.common.internal.Supplier<any>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class Throwables extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.internal.Throwables>;
					public static getCausalChain(param0: java.lang.Throwable): java.util.List<java.lang.Throwable>;
					public static propagateIfPossible(param0: java.lang.Throwable): void;
					public static getStackTraceAsString(param0: java.lang.Throwable): string;
					public static propagateIfPossible(param0: java.lang.Throwable, param1: java.lang.Class<any>, param2: java.lang.Class<any>): void;
					public static getRootCause(param0: java.lang.Throwable): java.lang.Throwable;
					public static propagateIfPossible(param0: java.lang.Throwable, param1: java.lang.Class<any>): void;
					public static propagate(param0: java.lang.Throwable): java.lang.RuntimeException;
					public static propagateIfInstanceOf(param0: java.lang.Throwable, param1: java.lang.Class<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module internal {
				export class VisibleForTesting extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.facebook.common.internal.VisibleForTesting>;
					/**
					 * Constructs a new instance of the com.facebook.common.internal.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						annotationType(): java.lang.Class<any>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module lifecycle {
				export class AttachDetachListener extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.lifecycle.AttachDetachListener>;
					/**
					 * Constructs a new instance of the com.facebook.common.lifecycle.AttachDetachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAttachToView(param0: globalAndroid.view.View): void;
						onDetachFromView(param0: globalAndroid.view.View): void;
					});
					public constructor();
					public onAttachToView(param0: globalAndroid.view.View): void;
					public onDetachFromView(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module logging {
				export class FLog extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.logging.FLog>;
					public static VERBOSE: number;
					public static DEBUG: number;
					public static INFO: number;
					public static WARN: number;
					public static ERROR: number;
					public static ASSERT: number;
					public static d(param0: string, param1: string, param2: any, param3: any, param4: any, param5: any): void;
					public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static i(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any, param5: any): void;
					public static w(param0: java.lang.Class<any>, param1: string): void;
					public static wtf(param0: string, param1: string, param2: native.Array<any>): void;
					public static v(param0: string, param1: string, param2: any, param3: any, param4: any, param5: any): void;
					public static v(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any, param5: any): void;
					public static getMinimumLoggingLevel(): number;
					public static i(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
					public constructor();
					public static d(param0: string, param1: string): void;
					public static d(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
					public static v(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
					public static v(param0: string, param1: string): void;
					public static v(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
					public static v(param0: string, param1: string, param2: any, param3: any, param4: any): void;
					public static wtf(param0: string, param1: string): void;
					public static wtf(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static w(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
					public static v(param0: java.lang.Class<any>, param1: string): void;
					public static w(param0: string, param1: string, param2: native.Array<any>): void;
					public static e(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static e(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
					public static v(param0: string, param1: string, param2: native.Array<any>): void;
					public static v(param0: java.lang.Class<any>, param1: string, param2: any): void;
					public static d(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any): void;
					public static i(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
					public static i(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static d(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
					public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static e(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static e(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
					public static i(param0: string, param1: string, param2: any, param3: any, param4: any): void;
					public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static d(param0: java.lang.Class<any>, param1: string): void;
					public static i(param0: string, param1: string): void;
					public static v(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
					public static wtf(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
					public static e(param0: string, param1: string): void;
					public static wtf(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static d(param0: string, param1: string, param2: any, param3: any, param4: any): void;
					public static wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static v(param0: string, param1: string, param2: any, param3: any): void;
					public static d(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
					public static d(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static v(param0: string, param1: string, param2: any): void;
					public static w(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static i(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any): void;
					public static i(param0: java.lang.Class<any>, param1: string, param2: any): void;
					public static v(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static i(param0: java.lang.Class<any>, param1: string, param2: any, param3: any): void;
					public static i(param0: java.lang.Class<any>, param1: string): void;
					public static setLoggingDelegate(param0: com.facebook.common.logging.LoggingDelegate): void;
					public static i(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static setMinimumLoggingLevel(param0: number): void;
					public static w(param0: string, param1: string): void;
					public static d(param0: string, param1: string, param2: any): void;
					public static w(param0: java.lang.Class<any>, param1: string, param2: java.lang.Throwable): void;
					public static d(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static wtf(param0: java.lang.Class<any>, param1: string, param2: native.Array<any>): void;
					public static v(param0: java.lang.Class<any>, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static i(param0: string, param1: string, param2: any, param3: any, param4: any, param5: any): void;
					public static i(param0: string, param1: string, param2: native.Array<any>): void;
					public static d(param0: string, param1: string, param2: any, param3: any): void;
					public static isLoggable(param0: number): boolean;
					public static v(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any): void;
					public static i(param0: string, param1: string, param2: any, param3: any): void;
					public static d(param0: java.lang.Class<any>, param1: string, param2: any): void;
					public static w(param0: string, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
					public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static wtf(param0: java.lang.Class<any>, param1: string): void;
					public static i(param0: string, param1: string, param2: any): void;
					public static e(param0: string, param1: string, param2: native.Array<any>): void;
					public static e(param0: java.lang.Class<any>, param1: string): void;
					public static d(param0: string, param1: string, param2: native.Array<any>): void;
					public static d(param0: java.lang.Class<any>, param1: string, param2: any, param3: any, param4: any, param5: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module logging {
				export class FLogDefaultLoggingDelegate extends java.lang.Object implements com.facebook.common.logging.LoggingDelegate {
					public static class: java.lang.Class<com.facebook.common.logging.FLogDefaultLoggingDelegate>;
					public static sInstance: com.facebook.common.logging.FLogDefaultLoggingDelegate;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public getMinimumLoggingLevel(): number;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
					public setApplicationTag(param0: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public setMinimumLoggingLevel(param0: number): void;
					public isLoggable(param0: number): boolean;
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static getInstance(): com.facebook.common.logging.FLogDefaultLoggingDelegate;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module logging {
				export class LoggingDelegate extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.logging.LoggingDelegate>;
					/**
					 * Constructs a new instance of the com.facebook.common.logging.LoggingDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setMinimumLoggingLevel(param0: number): void;
						getMinimumLoggingLevel(): number;
						isLoggable(param0: number): boolean;
						v(param0: string, param1: string): void;
						v(param0: string, param1: string, param2: java.lang.Throwable): void;
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: java.lang.Throwable): void;
						i(param0: string, param1: string): void;
						i(param0: string, param1: string, param2: java.lang.Throwable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: string, param2: java.lang.Throwable): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: java.lang.Throwable): void;
						wtf(param0: string, param1: string): void;
						wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
						log(param0: number, param1: string, param2: string): void;
					});
					public constructor();
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public getMinimumLoggingLevel(): number;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public setMinimumLoggingLevel(param0: number): void;
					public isLoggable(param0: number): boolean;
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public log(param0: number, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module media {
				export class MediaUtils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.media.MediaUtils>;
					public static ADDITIONAL_ALLOWED_MIME_TYPES: java.util.Map<string,string>;
					public static isVideo(param0: string): boolean;
					public static extractMime(param0: string): string;
					public constructor();
					public static isNonNativeSupportedMimeType(param0: string): boolean;
					public static isPhoto(param0: string): boolean;
					public static isThreeD(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class ByteArrayPool extends com.facebook.common.memory.Pool<native.Array<number>> {
					public static class: java.lang.Class<com.facebook.common.memory.ByteArrayPool>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.ByteArrayPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: number): any;
						release(param0: any): void;
						release(param0: any): void;
						trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					});
					public constructor();
					public release(param0: any): void;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public get(param0: number): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class MemoryTrimType {
					public static class: java.lang.Class<com.facebook.common.memory.MemoryTrimType>;
					public static OnCloseToDalvikHeapLimit: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemLowMemoryWhileAppInForeground: com.facebook.common.memory.MemoryTrimType;
					public static OnSystemLowMemoryWhileAppInBackground: com.facebook.common.memory.MemoryTrimType;
					public static OnAppBackgrounded: com.facebook.common.memory.MemoryTrimType;
					public getSuggestedTrimRatio(): number;
					public static valueOf(param0: string): com.facebook.common.memory.MemoryTrimType;
					public static values(): native.Array<com.facebook.common.memory.MemoryTrimType>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class MemoryTrimmable extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.memory.MemoryTrimmable>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					});
					public constructor();
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class MemoryTrimmableRegistry extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.memory.MemoryTrimmableRegistry>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.MemoryTrimmableRegistry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
						unregisterMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					});
					public constructor();
					public unregisterMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					public registerMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class NoOpMemoryTrimmableRegistry extends java.lang.Object implements com.facebook.common.memory.MemoryTrimmableRegistry {
					public static class: java.lang.Class<com.facebook.common.memory.NoOpMemoryTrimmableRegistry>;
					public constructor();
					public unregisterMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
					public static getInstance(): com.facebook.common.memory.NoOpMemoryTrimmableRegistry;
					public registerMemoryTrimmable(param0: com.facebook.common.memory.MemoryTrimmable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class Pool<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.memory.Pool<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.Pool<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: number): V;
						release(param0: V): void;
						release(param0: any): void;
						trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					});
					public constructor();
					public release(param0: any): void;
					public get(param0: number): V;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public release(param0: V): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteArrayBufferedInputStream extends java.io.InputStream {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteArrayBufferedInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public constructor();
					public read(param0: native.Array<number>): number;
					public finalize(): void;
					public close(): void;
					public skip(param0: number): number;
					public constructor(param0: java.io.InputStream, param1: native.Array<number>, param2: com.facebook.common.references.ResourceReleaser<native.Array<number>>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteBuffer extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBuffer>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.PooledByteBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						size(): number;
						read(param0: number): number;
						read(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
						getNativePtr(): number;
						close(): void;
						isClosed(): boolean;
						close(): void;
					});
					public constructor();
					public read(param0: number): number;
					public close(): void;
					public read(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
					public size(): number;
					public getNativePtr(): number;
					public isClosed(): boolean;
				}
				export module PooledByteBuffer {
					export class ClosedException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.common.memory.PooledByteBuffer.ClosedException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteBufferFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBufferFactory>;
					/**
					 * Constructs a new instance of the com.facebook.common.memory.PooledByteBufferFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						newByteBuffer(param0: number): com.facebook.common.memory.PooledByteBuffer;
						newByteBuffer(param0: java.io.InputStream): com.facebook.common.memory.PooledByteBuffer;
						newByteBuffer(param0: native.Array<number>): com.facebook.common.memory.PooledByteBuffer;
						newByteBuffer(param0: java.io.InputStream, param1: number): com.facebook.common.memory.PooledByteBuffer;
						newOutputStream(): com.facebook.common.memory.PooledByteBufferOutputStream;
						newOutputStream(param0: number): com.facebook.common.memory.PooledByteBufferOutputStream;
					});
					public constructor();
					public newByteBuffer(param0: native.Array<number>): com.facebook.common.memory.PooledByteBuffer;
					public newOutputStream(param0: number): com.facebook.common.memory.PooledByteBufferOutputStream;
					public newByteBuffer(param0: number): com.facebook.common.memory.PooledByteBuffer;
					public newOutputStream(): com.facebook.common.memory.PooledByteBufferOutputStream;
					public newByteBuffer(param0: java.io.InputStream): com.facebook.common.memory.PooledByteBuffer;
					public newByteBuffer(param0: java.io.InputStream, param1: number): com.facebook.common.memory.PooledByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteBufferInputStream extends java.io.InputStream {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBufferInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public constructor(param0: com.facebook.common.memory.PooledByteBuffer);
					public reset(): void;
					public constructor();
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public skip(param0: number): number;
					public close(): void;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export abstract class PooledByteBufferOutputStream extends java.io.OutputStream {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteBufferOutputStream>;
					public constructor();
					public toByteBuffer(): com.facebook.common.memory.PooledByteBuffer;
					public close(): void;
					public size(): number;
					public flush(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module memory {
				export class PooledByteStreams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.memory.PooledByteStreams>;
					public constructor(param0: com.facebook.common.memory.ByteArrayPool, param1: number);
					public constructor(param0: com.facebook.common.memory.ByteArrayPool);
					public copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
					public copy(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class CloseableReference<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.CloseableReference<any>>;
					public static closeSafely(param0: java.lang.Iterable<any>): void;
					public static closeSafely(param0: com.facebook.common.references.CloseableReference<any>): void;
					public getUnderlyingReferenceTestOnly(): com.facebook.common.references.SharedReference<T>;
					public finalize(): void;
					public static of(param0: java.io.Closeable): com.facebook.common.references.CloseableReference<any>;
					public get(): T;
					public getValueHash(): number;
					public static isValid(param0: com.facebook.common.references.CloseableReference<any>): boolean;
					public clone(): any;
					public static of(param0: any, param1: com.facebook.common.references.ResourceReleaser<any>): com.facebook.common.references.CloseableReference<any>;
					public cloneOrNull(): com.facebook.common.references.CloseableReference<T>;
					public isValid(): boolean;
					public close(): void;
					public clone(): com.facebook.common.references.CloseableReference<T>;
					public static cloneOrNull(param0: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
					public static cloneOrNull(param0: java.util.Collection<any>): java.util.List<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class OOMSoftReference<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.OOMSoftReference<any>>;
					public set(param0: T): void;
					public constructor();
					public clear(): void;
					public get(): T;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class ResourceReleaser<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.ResourceReleaser<any>>;
					/**
					 * Constructs a new instance of the com.facebook.common.references.ResourceReleaser<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						release(param0: T): void;
					});
					public constructor();
					public release(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module references {
				export class SharedReference<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.references.SharedReference<any>>;
					public static isValid(param0: com.facebook.common.references.SharedReference<any>): boolean;
					public addReference(): void;
					public constructor(param0: T, param1: com.facebook.common.references.ResourceReleaser<T>);
					public isValid(): boolean;
					public getRefCountTestOnly(): number;
					public get(): T;
					public deleteReference(): void;
				}
				export module SharedReference {
					export class NullReferenceException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.common.references.SharedReference.NullReferenceException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module statfs {
				export class StatFsHelper extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.statfs.StatFsHelper>;
					public static getInstance(): com.facebook.common.statfs.StatFsHelper;
					public constructor();
					public getFreeStorageSpace(param0: com.facebook.common.statfs.StatFsHelper.StorageType): number;
					public getTotalStorageSpace(param0: com.facebook.common.statfs.StatFsHelper.StorageType): number;
					public getAvailableStorageSpace(param0: com.facebook.common.statfs.StatFsHelper.StorageType): number;
					public resetStats(): void;
					public testLowDiskSpace(param0: com.facebook.common.statfs.StatFsHelper.StorageType, param1: number): boolean;
					public static createStatFs(param0: string): globalAndroid.os.StatFs;
				}
				export module StatFsHelper {
					export class StorageType {
						public static class: java.lang.Class<com.facebook.common.statfs.StatFsHelper.StorageType>;
						public static INTERNAL: com.facebook.common.statfs.StatFsHelper.StorageType;
						public static EXTERNAL: com.facebook.common.statfs.StatFsHelper.StorageType;
						public static values(): native.Array<com.facebook.common.statfs.StatFsHelper.StorageType>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.facebook.common.statfs.StatFsHelper.StorageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module streams {
				export class LimitedInputStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.facebook.common.streams.LimitedInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public constructor(param0: java.io.InputStream);
					public constructor();
					public read(param0: native.Array<number>): number;
					public skip(param0: number): number;
					public close(): void;
					public constructor(param0: java.io.InputStream, param1: number);
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module streams {
				export class TailAppendingInputStream extends java.io.FilterInputStream {
					public static class: java.lang.Class<com.facebook.common.streams.TailAppendingInputStream>;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public constructor(param0: java.io.InputStream);
					public constructor();
					public read(param0: native.Array<number>): number;
					public close(): void;
					public constructor(param0: java.io.InputStream, param1: native.Array<number>);
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class AwakeTimeSinceBootClock extends java.lang.Object implements com.facebook.common.time.MonotonicClock {
					public static class: java.lang.Class<com.facebook.common.time.AwakeTimeSinceBootClock>;
					public static get(): com.facebook.common.time.AwakeTimeSinceBootClock;
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class Clock extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.time.Clock>;
					/**
					 * Constructs a new instance of the com.facebook.common.time.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						now(): number;
					});
					public constructor();
					public static MAX_TIME: number;
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class CurrentThreadTimeClock extends java.lang.Object implements com.facebook.common.time.Clock {
					public static class: java.lang.Class<com.facebook.common.time.CurrentThreadTimeClock>;
					public constructor();
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class MonotonicClock extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.time.MonotonicClock>;
					/**
					 * Constructs a new instance of the com.facebook.common.time.MonotonicClock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						now(): number;
					});
					public constructor();
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class RealtimeSinceBootClock extends java.lang.Object implements com.facebook.common.time.MonotonicClock {
					public static class: java.lang.Class<com.facebook.common.time.RealtimeSinceBootClock>;
					public now(): number;
					public static get(): com.facebook.common.time.RealtimeSinceBootClock;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module time {
				export class SystemClock extends java.lang.Object implements com.facebook.common.time.Clock {
					public static class: java.lang.Class<com.facebook.common.time.SystemClock>;
					public static get(): com.facebook.common.time.SystemClock;
					public now(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class ByteConstants extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.util.ByteConstants>;
					public static KB: number;
					public static MB: number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class ExceptionWithNoStacktrace extends java.lang.Exception {
					public static class: java.lang.Class<com.facebook.common.util.ExceptionWithNoStacktrace>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public fillInStackTrace(): java.lang.Throwable;
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class HashCodeUtil extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.util.HashCodeUtil>;
					public static hashCode(param0: any, param1: any, param2: any, param3: any): number;
					public static hashCode(param0: number, param1: number, param2: number): number;
					public static hashCode(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public static hashCode(param0: number, param1: number, param2: number, param3: number): number;
					public static hashCode(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public static hashCode(param0: any): number;
					public static hashCode(param0: any, param1: any, param2: any, param3: any, param4: any): number;
					public constructor();
					public static hashCode(param0: any, param1: any, param2: any): number;
					public static hashCode(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): number;
					public static hashCode(param0: number, param1: number): number;
					public static hashCode(param0: number): number;
					public hashCode(): number;
					public static hashCode(param0: any, param1: any): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class Hex extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.util.Hex>;
					public static byte2Hex(param0: number): string;
					public static decodeHex(param0: string): native.Array<number>;
					public constructor();
					public static hexStringToByteArray(param0: string): native.Array<number>;
					public static encodeHex(param0: native.Array<number>, param1: boolean): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class SecureHashUtil extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.util.SecureHashUtil>;
					public static makeSHA1Hash(param0: native.Array<number>): string;
					public static makeMD5Hash(param0: java.io.InputStream): string;
					public static makeSHA256Hash(param0: native.Array<number>): string;
					public constructor();
					public static makeSHA1Hash(param0: string): string;
					public static makeSHA1HashBase64(param0: native.Array<number>): string;
					public static makeMD5Hash(param0: native.Array<number>): string;
					public static convertToHex(param0: native.Array<number>): string;
					public static makeMD5Hash(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class StreamUtil extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.util.StreamUtil>;
					public static getBytesFromStream(param0: java.io.InputStream, param1: number): native.Array<number>;
					public constructor();
					public static getBytesFromStream(param0: java.io.InputStream): native.Array<number>;
					public static skip(param0: java.io.InputStream, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class TriState {
					public static class: java.lang.Class<com.facebook.common.util.TriState>;
					public static YES: com.facebook.common.util.TriState;
					public static NO: com.facebook.common.util.TriState;
					public static UNSET: com.facebook.common.util.TriState;
					public isSet(): boolean;
					public static values(): native.Array<com.facebook.common.util.TriState>;
					public asBoolean(): boolean;
					public static valueOf(param0: boolean): com.facebook.common.util.TriState;
					public asBooleanObject(): java.lang.Boolean;
					public static fromDbValue(param0: number): com.facebook.common.util.TriState;
					public getDbValue(): number;
					public static valueOf(param0: string): com.facebook.common.util.TriState;
					public static valueOf(param0: java.lang.Boolean): com.facebook.common.util.TriState;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public asBoolean(param0: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module util {
				export class UriUtil extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.util.UriUtil>;
					public static HTTP_SCHEME: string;
					public static HTTPS_SCHEME: string;
					public static LOCAL_FILE_SCHEME: string;
					public static LOCAL_CONTENT_SCHEME: string;
					public static LOCAL_ASSET_SCHEME: string;
					public static LOCAL_RESOURCE_SCHEME: string;
					public static QUALIFIED_RESOURCE_SCHEME: string;
					public static DATA_SCHEME: string;
					public static getUriForResourceId(param0: number): globalAndroid.net.Uri;
					public static isLocalContactUri(param0: globalAndroid.net.Uri): boolean;
					public static isNetworkUri(param0: globalAndroid.net.Uri): boolean;
					public static isLocalFileUri(param0: globalAndroid.net.Uri): boolean;
					public static isQualifiedResourceUri(param0: globalAndroid.net.Uri): boolean;
					public static isLocalContentUri(param0: globalAndroid.net.Uri): boolean;
					public constructor();
					public static uriToUrl(param0: globalAndroid.net.Uri): java.net.URL;
					public static isDataUri(param0: globalAndroid.net.Uri): boolean;
					public static parseUriOrNull(param0: string): globalAndroid.net.Uri;
					public static getSchemeOrNull(param0: globalAndroid.net.Uri): string;
					public static isLocalResourceUri(param0: globalAndroid.net.Uri): boolean;
					public static getUriForQualifiedResource(param0: string, param1: number): globalAndroid.net.Uri;
					public static isLocalCameraUri(param0: globalAndroid.net.Uri): boolean;
					public static isLocalAssetUri(param0: globalAndroid.net.Uri): boolean;
					public static getRealPathFromUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): string;
					public static getUriForFile(param0: java.io.File): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module webp {
				export class BitmapCreator extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.webp.BitmapCreator>;
					/**
					 * Constructs a new instance of the com.facebook.common.webp.BitmapCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
					});
					public constructor();
					public createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module webp {
				export class WebpBitmapFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.webp.WebpBitmapFactory>;
					/**
					 * Constructs a new instance of the com.facebook.common.webp.WebpBitmapFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setWebpErrorLogger(param0: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): void;
						setBitmapCreator(param0: com.facebook.common.webp.BitmapCreator): void;
						decodeFileDescriptor(param0: java.io.FileDescriptor, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						decodeFile(param0: string, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						decodeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					});
					public constructor();
					public decodeByteArray(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public setBitmapCreator(param0: com.facebook.common.webp.BitmapCreator): void;
					public decodeFile(param0: string, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeFileDescriptor(param0: java.io.FileDescriptor, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeStream(param0: java.io.InputStream, param1: globalAndroid.graphics.Rect, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public setWebpErrorLogger(param0: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): void;
				}
				export module WebpBitmapFactory {
					export class WebpErrorLogger extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger>;
						/**
						 * Constructs a new instance of the com.facebook.common.webp.WebpBitmapFactory$WebpErrorLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onWebpErrorLog(param0: string, param1: string): void;
						});
						public constructor();
						public onWebpErrorLog(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export module webp {
				export class WebpSupportStatus extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.common.webp.WebpSupportStatus>;
					public static sIsWebpSupportRequired: boolean;
					public static sIsSimpleWebpSupported: boolean;
					public static sIsExtendedWebpSupported: boolean;
					public static sWebpBitmapFactory: com.facebook.common.webp.WebpBitmapFactory;
					public static isAnimatedWebpHeader(param0: native.Array<number>, param1: number): boolean;
					public static isExtendedWebpHeader(param0: native.Array<number>, param1: number, param2: number): boolean;
					public constructor();
					public static loadWebpBitmapFactoryIfExists(): com.facebook.common.webp.WebpBitmapFactory;
					public static isLosslessWebpHeader(param0: native.Array<number>, param1: number): boolean;
					public static isSimpleWebpHeader(param0: native.Array<number>, param1: number): boolean;
					public static isWebpSupportedByPlatform(param0: native.Array<number>, param1: number, param2: number): boolean;
					public static isExtendedWebpHeaderWithAlpha(param0: native.Array<number>, param1: number): boolean;
					public static isWebpHeader(param0: native.Array<number>, param1: number, param2: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export abstract class AbstractDataSource<T>  extends com.facebook.datasource.DataSource<any> {
				public static class: java.lang.Class<com.facebook.datasource.AbstractDataSource<any>>;
				public getResult(): any;
				public hasFailed(): boolean;
				public close(): boolean;
				public isClosed(): boolean;
				public isFinished(): boolean;
				public setProgress(param0: number): boolean;
				public constructor();
				public setResult(param0: any, param1: boolean): boolean;
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public notifyProgressUpdate(): void;
				public closeResult(param0: any): void;
				public hasResult(): boolean;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
				public setFailure(param0: java.lang.Throwable): boolean;
			}
			export module AbstractDataSource {
				export class DataSourceStatus {
					public static class: java.lang.Class<com.facebook.datasource.AbstractDataSource.DataSourceStatus>;
					public static IN_PROGRESS: com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static SUCCESS: com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static FAILURE: com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static valueOf(param0: string): com.facebook.datasource.AbstractDataSource.DataSourceStatus;
					public static values(): native.Array<com.facebook.datasource.AbstractDataSource.DataSourceStatus>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export abstract class BaseBooleanSubscriber extends com.facebook.datasource.DataSubscriber<java.lang.Boolean> {
				public static class: java.lang.Class<com.facebook.datasource.BaseBooleanSubscriber>;
				public onCancellation(param0: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
				public onFailure(param0: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
				public onFailureImpl(param0: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onNewResult(param0: com.facebook.datasource.DataSource<java.lang.Boolean>): void;
				public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResultImpl(param0: boolean): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export abstract class BaseDataSubscriber<T>  extends com.facebook.datasource.DataSubscriber<any> {
				public static class: java.lang.Class<com.facebook.datasource.BaseDataSubscriber<any>>;
				public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
				public onFailureImpl(param0: com.facebook.datasource.DataSource<any>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
				public onNewResultImpl(param0: com.facebook.datasource.DataSource<any>): void;
				public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class DataSource<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.datasource.DataSource<any>>;
				/**
				 * Constructs a new instance of the com.facebook.datasource.DataSource<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isClosed(): boolean;
					getResult(): T;
					hasResult(): boolean;
					isFinished(): boolean;
					hasFailed(): boolean;
					getFailureCause(): java.lang.Throwable;
					getProgress(): number;
					close(): boolean;
					subscribe(param0: com.facebook.datasource.DataSubscriber<T>, param1: java.util.concurrent.Executor): void;
				});
				public constructor();
				public hasFailed(): boolean;
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<T>, param1: java.util.concurrent.Executor): void;
				public getResult(): T;
				public close(): boolean;
				public isClosed(): boolean;
				public hasResult(): boolean;
				public isFinished(): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class DataSources extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.datasource.DataSources>;
				public static waitForFinalResult(param0: com.facebook.datasource.DataSource<any>): any;
				public static getFailedDataSourceSupplier(param0: java.lang.Throwable): com.facebook.common.internal.Supplier<any>;
				public static immediateFailedDataSource(param0: java.lang.Throwable): com.facebook.datasource.DataSource<any>;
				public static immediateDataSource(param0: any): com.facebook.datasource.DataSource<any>;
			}
			export module DataSources {
				export class ValueHolder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.datasource.DataSources.ValueHolder<any>>;
					public value: T;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class DataSubscriber<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.datasource.DataSubscriber<any>>;
				/**
				 * Constructs a new instance of the com.facebook.datasource.DataSubscriber<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNewResult(param0: com.facebook.datasource.DataSource<T>): void;
					onFailure(param0: com.facebook.datasource.DataSource<T>): void;
					onCancellation(param0: com.facebook.datasource.DataSource<T>): void;
					onProgressUpdate(param0: com.facebook.datasource.DataSource<T>): void;
				});
				public constructor();
				public onNewResult(param0: com.facebook.datasource.DataSource<T>): void;
				public onCancellation(param0: com.facebook.datasource.DataSource<T>): void;
				public onProgressUpdate(param0: com.facebook.datasource.DataSource<T>): void;
				public onFailure(param0: com.facebook.datasource.DataSource<T>): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class FirstAvailableDataSourceSupplier<T>  extends com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>> {
				public static class: java.lang.Class<com.facebook.datasource.FirstAvailableDataSourceSupplier<any>>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static create(param0: java.util.List<any>): com.facebook.datasource.FirstAvailableDataSourceSupplier<any>;
				public get(): any;
				public toString(): string;
				public get(): com.facebook.datasource.DataSource<any>;
			}
			export module FirstAvailableDataSourceSupplier {
				export class FirstAvailableDataSource extends com.facebook.datasource.AbstractDataSource<any> {
					public static class: java.lang.Class<com.facebook.datasource.FirstAvailableDataSourceSupplier.FirstAvailableDataSource>;
					public isFinished(): boolean;
					public constructor(param0: com.facebook.datasource.FirstAvailableDataSourceSupplier<any>);
					public getProgress(): number;
					public constructor();
					public hasResult(): boolean;
					public close(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public hasFailed(): boolean;
					public isClosed(): boolean;
				}
				export module FirstAvailableDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<any> {
						public static class: java.lang.Class<com.facebook.datasource.FirstAvailableDataSourceSupplier.FirstAvailableDataSource.InternalDataSubscriber>;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class IncreasingQualityDataSourceSupplier<T>  extends com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>> {
				public static class: java.lang.Class<com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>>;
				public static create(param0: java.util.List<any>): com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public get(): any;
				public toString(): string;
				public get(): com.facebook.datasource.DataSource<any>;
			}
			export module IncreasingQualityDataSourceSupplier {
				export class IncreasingQualityDataSource extends com.facebook.datasource.AbstractDataSource<any> {
					public static class: java.lang.Class<com.facebook.datasource.IncreasingQualityDataSourceSupplier.IncreasingQualityDataSource>;
					public isFinished(): boolean;
					public getProgress(): number;
					public constructor();
					public hasResult(): boolean;
					public close(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public hasFailed(): boolean;
					public constructor(param0: com.facebook.datasource.IncreasingQualityDataSourceSupplier<any>);
					public isClosed(): boolean;
				}
				export module IncreasingQualityDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<any> {
						public static class: java.lang.Class<com.facebook.datasource.IncreasingQualityDataSourceSupplier.IncreasingQualityDataSource.InternalDataSubscriber>;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public constructor(param0: com.facebook.datasource.IncreasingQualityDataSourceSupplier.IncreasingQualityDataSource, param1: number);
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class RetainingDataSourceSupplier<T>  extends com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>> {
				public static class: java.lang.Class<com.facebook.datasource.RetainingDataSourceSupplier<any>>;
				public get(): any;
				public replaceSupplier(param0: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>): void;
				public get(): com.facebook.datasource.DataSource<any>;
				public constructor();
			}
			export module RetainingDataSourceSupplier {
				export class RetainingDataSource<T>  extends com.facebook.datasource.AbstractDataSource<any> {
					public static class: java.lang.Class<com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource<any>>;
					public isFinished(): boolean;
					public getProgress(): number;
					public setSupplier(param0: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>): void;
					public hasResult(): boolean;
					public close(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public hasFailed(): boolean;
					public isClosed(): boolean;
				}
				export module RetainingDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<any> {
						public static class: java.lang.Class<com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource.InternalDataSubscriber>;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module datasource {
			export class SimpleDataSource<T>  extends com.facebook.datasource.AbstractDataSource<any> {
				public static class: java.lang.Class<com.facebook.datasource.SimpleDataSource<any>>;
				public getResult(): any;
				public static create(): com.facebook.datasource.SimpleDataSource<any>;
				public hasFailed(): boolean;
				public close(): boolean;
				public isClosed(): boolean;
				public isFinished(): boolean;
				public setProgress(param0: number): boolean;
				public setResult(param0: any, param1: boolean): boolean;
				public getFailureCause(): java.lang.Throwable;
				public getProgress(): number;
				public setResult(param0: any): boolean;
				public hasResult(): boolean;
				public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
				public setFailure(param0: java.lang.Throwable): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawable {
			export module base {
				export class DrawableWithCaches extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawable.base.DrawableWithCaches>;
					/**
					 * Constructs a new instance of the com.facebook.drawable.base.DrawableWithCaches interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						dropCaches(): void;
					});
					public constructor();
					public dropCaches(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.drawee.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class BuildConfig extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class DraweeConfig extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.DraweeConfig>;
						public getDebugOverlayEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
						public getCustomDrawableFactories(): com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>;
						public static newBuilder(): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
						public getPipelineDraweeControllerFactory(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory;
					}
					export module DraweeConfig {
						export class Builder extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.DraweeConfig.Builder>;
							public constructor();
							public setDrawDebugOverlay(param0: boolean): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public build(): com.facebook.drawee.backends.pipeline.DraweeConfig;
							public setDebugOverlayEnabledSupplier(param0: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public addCustomDrawableFactory(param0: com.facebook.imagepipeline.drawable.DrawableFactory): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
							public setPipelineDraweeControllerFactory(param0: com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory): com.facebook.drawee.backends.pipeline.DraweeConfig.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class Fresco extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.Fresco>;
						public static newDraweeControllerBuilder(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public static getImagePipelineFactory(): com.facebook.imagepipeline.core.ImagePipelineFactory;
						public static initialize(param0: globalAndroid.content.Context, param1: com.facebook.imagepipeline.core.ImagePipelineConfig): void;
						public static initialize(param0: globalAndroid.content.Context, param1: com.facebook.imagepipeline.core.ImagePipelineConfig, param2: com.facebook.drawee.backends.pipeline.DraweeConfig): void;
						public static shutDown(): void;
						public static initialize(param0: globalAndroid.content.Context): void;
						public static hasBeenInitialized(): boolean;
						public static getImagePipeline(): com.facebook.imagepipeline.core.ImagePipeline;
						public static getDraweeControllerBuilderSupplier(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilderSupplier;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class PipelineDraweeController extends com.facebook.drawee.controller.AbstractDraweeController<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.imagepipeline.image.ImageInfo> {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeController>;
						public getImageInfo(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): com.facebook.imagepipeline.image.ImageInfo;
						public constructor(param0: com.facebook.drawee.components.DeferredReleaser, param1: java.util.concurrent.Executor, param2: string, param3: any);
						public setCustomDrawableFactories(param0: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>): void;
						public constructor(param0: globalAndroid.content.res.Resources, param1: com.facebook.drawee.components.DeferredReleaser, param2: com.facebook.imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param5: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, param6: string, param7: com.facebook.cache.common.CacheKey, param8: any);
						public createDrawable(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): globalAndroid.graphics.drawable.Drawable;
						public releaseImage(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): void;
						public onViewportVisibilityHint(param0: boolean): void;
						public setImageOriginListener(param0: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): void;
						public releaseImage(param0: any): void;
						public initialize(param0: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, param1: string, param2: com.facebook.cache.common.CacheKey, param3: any, param4: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>, param5: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): void;
						public releaseDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getCachedImage(): any;
						public getDataSource(): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
						public onClick(): boolean;
						public setDrawDebugOverlay(param0: boolean): void;
						public getDataSource(): com.facebook.datasource.DataSource<any>;
						public initialize(param0: string, param1: any): void;
						public getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
						public getContentDescription(): string;
						public getImageInfo(param0: any): any;
						public getImageHash(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): number;
						public onImageLoadedFromCacheImmediately(param0: string, param1: any): void;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
						public onImageLoadedFromCacheImmediately(param0: string, param1: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): void;
						public release(): void;
						public getCacheKey(): com.facebook.cache.common.CacheKey;
						public toString(): string;
						public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
						public getCachedImage(): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
						public getImageHash(param0: any): number;
						public onAttach(): void;
						public getResources(): globalAndroid.content.res.Resources;
						public setContentDescription(param0: string): void;
						public createDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: globalAndroid.content.res.Resources, param1: com.facebook.drawee.components.DeferredReleaser, param2: com.facebook.imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param5: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, param6: string, param7: com.facebook.cache.common.CacheKey, param8: any, param9: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>);
						public isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
						public onDetach(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class PipelineDraweeControllerBuilder extends com.facebook.drawee.controller.AbstractDraweeControllerBuilder<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder,com.facebook.imagepipeline.request.ImageRequest,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.imagepipeline.image.ImageInfo> {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder>;
						public setCustomDrawableFactory(param0: com.facebook.imagepipeline.drawable.DrawableFactory): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						public setCustomDrawableFactories(param0: native.Array<com.facebook.imagepipeline.drawable.DrawableFactory>): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						public setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						public obtainController(): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
						public build(): com.facebook.drawee.interfaces.DraweeController;
						public getDataSourceForRequest(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
						public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<com.facebook.drawee.controller.ControllerListener<any>>);
						public build(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
						public static convertCacheLevelToRequestLevel(param0: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public setCallerContext(param0: any): any;
						public setImageOriginListener(param0: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setCustomDrawableFactories(param0: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory, param2: com.facebook.imagepipeline.core.ImagePipeline, param3: java.util.Set<com.facebook.drawee.controller.ControllerListener<any>>);
						public obtainController(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
						public getDataSourceForRequest(param0: any, param1: any, param2: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.datasource.DataSource<any>;
						public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): any;
						public setUri(param0: string): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class PipelineDraweeControllerBuilderSupplier extends com.facebook.common.internal.Supplier<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder> {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilderSupplier>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.drawee.backends.pipeline.DraweeConfig);
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.imagepipeline.core.ImagePipelineFactory, param2: java.util.Set<com.facebook.drawee.controller.ControllerListener<any>>, param3: com.facebook.drawee.backends.pipeline.DraweeConfig);
						public get(): com.facebook.drawee.backends.pipeline.PipelineDraweeControllerBuilder;
						public constructor(param0: globalAndroid.content.Context, param1: com.facebook.imagepipeline.core.ImagePipelineFactory, param2: com.facebook.drawee.backends.pipeline.DraweeConfig);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export class PipelineDraweeControllerFactory extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.PipelineDraweeControllerFactory>;
						public constructor();
						public newController(param0: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, param1: string, param2: com.facebook.cache.common.CacheKey, param3: any): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
						public internalCreateController(param0: globalAndroid.content.res.Resources, param1: com.facebook.drawee.components.DeferredReleaser, param2: com.facebook.imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param5: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>, param6: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>, param7: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, param8: string, param9: com.facebook.cache.common.CacheKey, param10: any): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
						public newController(param0: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>, param1: string, param2: com.facebook.cache.common.CacheKey, param3: any, param4: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>, param5: com.facebook.drawee.backends.pipeline.info.ImageOriginListener): com.facebook.drawee.backends.pipeline.PipelineDraweeController;
						public init(param0: globalAndroid.content.res.Resources, param1: com.facebook.drawee.components.DeferredReleaser, param2: com.facebook.imagepipeline.drawable.DrawableFactory, param3: java.util.concurrent.Executor, param4: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param5: com.facebook.common.internal.ImmutableList<com.facebook.imagepipeline.drawable.DrawableFactory>, param6: com.facebook.common.internal.Supplier<java.lang.Boolean>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export module info {
						export class ImageOrigin extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOrigin>;
							/**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOrigin interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								annotationType(): java.lang.Class<any>;
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
							});
							public constructor();
							public static UNKNOWN: number;
							public static DISK: number;
							public static MEMORY_BITMAP: number;
							public static NETWORK: number;
							public static MEMORY_ENCODED: number;
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module backends {
				export module pipeline {
					export module info {
						export class ImageOriginListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.drawee.backends.pipeline.info.ImageOriginListener>;
							/**
							 * Constructs a new instance of the com.facebook.drawee.backends.pipeline.info.ImageOriginListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onImageLoaded(param0: string, param1: number, param2: boolean): void;
							});
							public constructor();
							public onImageLoaded(param0: string, param1: number, param2: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export class DeferredReleaser extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.components.DeferredReleaser>;
					public constructor();
					public scheduleDeferredRelease(param0: com.facebook.drawee.components.DeferredReleaser.Releasable): void;
					public static getInstance(): com.facebook.drawee.components.DeferredReleaser;
					public cancelDeferredRelease(param0: com.facebook.drawee.components.DeferredReleaser.Releasable): void;
				}
				export module DeferredReleaser {
					export class Releasable extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.components.DeferredReleaser.Releasable>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.components.DeferredReleaser$Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							release(): void;
						});
						public constructor();
						public release(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export class DraweeEventTracker extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.components.DraweeEventTracker>;
					public toString(): string;
					public static newInstance(): com.facebook.drawee.components.DraweeEventTracker;
					public static disable(): void;
					public recordEvent(param0: com.facebook.drawee.components.DraweeEventTracker.Event): void;
				}
				export module DraweeEventTracker {
					export class Event {
						public static class: java.lang.Class<com.facebook.drawee.components.DraweeEventTracker.Event>;
						public static ON_SET_HIERARCHY: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_CLEAR_HIERARCHY: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SET_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_CLEAR_OLD_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_CLEAR_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_INIT_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_ATTACH_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DETACH_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_RELEASE_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_SUBMIT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_RESULT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_RESULT_INT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_FAILURE: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DATASOURCE_FAILURE_INT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_HOLDER_ATTACH: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_HOLDER_DETACH: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DRAWABLE_SHOW: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_DRAWABLE_HIDE: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_ACTIVITY_START: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_ACTIVITY_STOP: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_RUN_CLEAR_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SCHEDULE_CLEAR_CONTROLLER: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SAME_CONTROLLER_SKIPPED: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static ON_SUBMIT_CACHE_HIT: com.facebook.drawee.components.DraweeEventTracker.Event;
						public static values(): native.Array<com.facebook.drawee.components.DraweeEventTracker.Event>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.facebook.drawee.components.DraweeEventTracker.Event;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module components {
				export class RetryManager extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.components.RetryManager>;
					public reset(): void;
					public static newInstance(): com.facebook.drawee.components.RetryManager;
					public constructor();
					public setMaxTapToRetryAttemps(param0: number): void;
					public shouldRetryOnTap(): boolean;
					public init(): void;
					public setTapToRetryEnabled(param0: boolean): void;
					public notifyTapToRetry(): void;
					public isTapToRetryEnabled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export abstract class AbstractDraweeController<T, INFO>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeController<any,any>>;
					public setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
					public setControllerViewportVisibilityListener(param0: com.facebook.drawee.controller.ControllerViewportVisibilityListener): void;
					public getId(): string;
					public setContentDescription(param0: string): void;
					public getControllerListener(): com.facebook.drawee.controller.ControllerListener<INFO>;
					public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onAttach(): void;
					public getContentDescription(): string;
					public getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
					public onImageLoadedFromCacheImmediately(param0: string, param1: T): void;
					public constructor(param0: com.facebook.drawee.components.DeferredReleaser, param1: java.util.concurrent.Executor, param2: string, param3: any);
					public toString(): string;
					public onClick(): boolean;
					public getDataSource(): com.facebook.datasource.DataSource<T>;
					public getControllerOverlay(): globalAndroid.graphics.drawable.Drawable;
					public onDetach(): void;
					public onViewportVisibilityHint(param0: boolean): void;
					public removeControllerListener(param0: com.facebook.drawee.controller.ControllerListener<any>): void;
					public shouldHandleGesture(): boolean;
					public setRetainImageOnFailure(param0: boolean): void;
					public release(): void;
					public initialize(param0: string, param1: any): void;
					public getImageHash(param0: T): number;
					public addControllerListener(param0: com.facebook.drawee.controller.ControllerListener<any>): void;
					public releaseImage(param0: T): void;
					public getGestureDetector(): com.facebook.drawee.gestures.GestureDetector;
					public submitRequest(): void;
					public releaseDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setGestureDetector(param0: com.facebook.drawee.gestures.GestureDetector): void;
					public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
					public createDrawable(param0: T): globalAndroid.graphics.drawable.Drawable;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
					public getCallerContext(): any;
					public getCachedImage(): T;
					public getImageInfo(param0: T): INFO;
					public getRetryManager(): com.facebook.drawee.components.RetryManager;
					public getImageClass(param0: T): string;
				}
				export module AbstractDraweeController {
					export class InternalForwardingListener<INFO>  extends com.facebook.drawee.controller.ForwardingControllerListener<any> {
						public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener<any>>;
						public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
						public onRelease(param0: string): void;
						public onIntermediateImageSet(param0: string, param1: any): void;
						public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
						public onFailure(param0: string, param1: java.lang.Throwable): void;
						public static createInternal(param0: com.facebook.drawee.controller.ControllerListener<any>, param1: com.facebook.drawee.controller.ControllerListener<any>): com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener<any>;
						public onSubmit(param0: string, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export abstract class AbstractDraweeControllerBuilder<BUILDER, REQUEST, IMAGE, INFO>  extends com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder {
					public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeControllerBuilder<any,any,any,any>>;
					public getRetainImageOnFailure(): boolean;
					public setAutoPlayAnimations(param0: boolean): any;
					public getFirstAvailableDataSourceSupplier(param0: native.Array<any>, param1: boolean): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public getFirstAvailableImageRequests(): native.Array<any>;
					public getDataSourceSupplierForRequest(param0: any): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public setDataSourceSupplier(param0: com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>): any;
					public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): any;
					public getAutoPlayAnimations(): boolean;
					public validate(): void;
					public maybeAttachListeners(param0: com.facebook.drawee.controller.AbstractDraweeController<any,any>): void;
					public maybeBuildAndSetRetryManager(param0: com.facebook.drawee.controller.AbstractDraweeController<any,any>): void;
					public getContentDescription(): string;
					public getImageRequest(): any;
					public getDataSourceSupplierForRequest(param0: any, param1: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public setControllerViewportVisibilityListener(param0: com.facebook.drawee.controller.ControllerViewportVisibilityListener): any;
					public build(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
					public getControllerListener(): com.facebook.drawee.controller.ControllerListener<any>;
					public setFirstAvailableImageRequests(param0: native.Array<any>, param1: boolean): any;
					public getContext(): globalAndroid.content.Context;
					public setImageRequest(param0: any): any;
					public reset(): any;
					public maybeBuildAndSetGestureDetector(param0: com.facebook.drawee.controller.AbstractDraweeController<any,any>): void;
					public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public obtainController(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
					public setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public build(): com.facebook.drawee.interfaces.DraweeController;
					public setLowResImageRequest(param0: any): any;
					public setCallerContext(param0: any): any;
					public setTapToRetryEnabled(param0: boolean): any;
					public getOldController(): com.facebook.drawee.interfaces.DraweeController;
					public getLowResImageRequest(): any;
					public getDataSourceForRequest(param0: any, param1: any, param2: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel): com.facebook.datasource.DataSource<any>;
					public setFirstAvailableImageRequests(param0: native.Array<any>): any;
					public setRetainImageOnFailure(param0: boolean): any;
					public obtainDataSourceSupplier(): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public getThis(): any;
					public setControllerListener(param0: com.facebook.drawee.controller.ControllerListener<any>): any;
					public setContentDescription(param0: string): any;
					public buildController(): com.facebook.drawee.controller.AbstractDraweeController<any,any>;
					public getControllerViewportVisibilityListener(): com.facebook.drawee.controller.ControllerViewportVisibilityListener;
					public static generateUniqueControllerId(): string;
					public getCallerContext(): any;
					public getDataSourceSupplier(): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<any>>;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.Set<com.facebook.drawee.controller.ControllerListener<any>>);
					public getTapToRetryEnabled(): boolean;
					public setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
				}
				export module AbstractDraweeControllerBuilder {
					export class CacheLevel {
						public static class: java.lang.Class<com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel>;
						public static FULL_FETCH: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static DISK_CACHE: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static BITMAP_MEMORY_CACHE: com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static valueOf(param0: string): com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.facebook.drawee.controller.AbstractDraweeControllerBuilder.CacheLevel>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class BaseControllerListener<INFO>  extends com.facebook.drawee.controller.ControllerListener<any> {
					public static class: java.lang.Class<com.facebook.drawee.controller.BaseControllerListener<any>>;
					public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageSet(param0: string, param1: any): void;
					public onRelease(param0: string): void;
					public constructor();
					public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
					public onFailure(param0: string, param1: java.lang.Throwable): void;
					public static getNoOpListener(): com.facebook.drawee.controller.ControllerListener<any>;
					public onSubmit(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class ControllerListener<INFO>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.controller.ControllerListener<any>>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.controller.ControllerListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubmit(param0: string, param1: any): void;
						onFinalImageSet(param0: string, param1: INFO, param2: globalAndroid.graphics.drawable.Animatable): void;
						onIntermediateImageSet(param0: string, param1: INFO): void;
						onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
						onFailure(param0: string, param1: java.lang.Throwable): void;
						onRelease(param0: string): void;
					});
					public constructor();
					public onRelease(param0: string): void;
					public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
					public onFailure(param0: string, param1: java.lang.Throwable): void;
					public onFinalImageSet(param0: string, param1: INFO, param2: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageSet(param0: string, param1: INFO): void;
					public onSubmit(param0: string, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class ControllerViewportVisibilityListener extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.controller.ControllerViewportVisibilityListener>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.controller.ControllerViewportVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDraweeViewportEntry(param0: string): void;
						onDraweeViewportExit(param0: string): void;
					});
					public constructor();
					public onDraweeViewportEntry(param0: string): void;
					public onDraweeViewportExit(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module controller {
				export class ForwardingControllerListener<INFO>  extends com.facebook.drawee.controller.ControllerListener<any> {
					public static class: java.lang.Class<com.facebook.drawee.controller.ForwardingControllerListener<any>>;
					public clearListeners(): void;
					public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
					public onIntermediateImageSet(param0: string, param1: any): void;
					public onRelease(param0: string): void;
					public static create(): com.facebook.drawee.controller.ForwardingControllerListener<any>;
					public addListener(param0: com.facebook.drawee.controller.ControllerListener<any>): void;
					public onFailure(param0: string, param1: java.lang.Throwable): void;
					public static of(param0: com.facebook.drawee.controller.ControllerListener<any>, param1: com.facebook.drawee.controller.ControllerListener<any>): com.facebook.drawee.controller.ForwardingControllerListener<any>;
					public onSubmit(param0: string, param1: any): void;
					public constructor();
					public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
					public removeListener(param0: com.facebook.drawee.controller.ControllerListener<any>): void;
					public static of(param0: com.facebook.drawee.controller.ControllerListener<any>): com.facebook.drawee.controller.ForwardingControllerListener<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module debug {
				export class DebugControllerOverlayDrawable extends globalAndroid.graphics.drawable.Drawable implements com.facebook.drawee.debug.listener.ImageLoadingTimeListener {
					public static class: java.lang.Class<com.facebook.drawee.debug.DebugControllerOverlayDrawable>;
					public setImageSize(param0: number): void;
					public reset(): void;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public onFinalImageSet(param0: number): void;
					public setImageId(param0: string): void;
					public setAlpha(param0: number): void;
					public setImageFormat(param0: string): void;
					public setFinalImageTimeMs(param0: number): void;
					public setTextGravity(param0: number): void;
					public setDimensions(param0: number, param1: number): void;
					public constructor();
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setControllerId(param0: string): void;
					public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public setAnimationInfo(param0: number, param1: number): void;
					public setScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module debug {
				export module listener {
					export class ImageLoadingTimeControllerListener extends com.facebook.drawee.controller.BaseControllerListener<any> {
						public static class: java.lang.Class<com.facebook.drawee.debug.listener.ImageLoadingTimeControllerListener>;
						public onFinalImageSet(param0: string, param1: any, param2: globalAndroid.graphics.drawable.Animatable): void;
						public onRelease(param0: string): void;
						public constructor();
						public constructor(param0: com.facebook.drawee.debug.listener.ImageLoadingTimeListener);
						public onIntermediateImageSet(param0: string, param1: any): void;
						public onIntermediateImageFailed(param0: string, param1: java.lang.Throwable): void;
						public onFailure(param0: string, param1: java.lang.Throwable): void;
						public onSubmit(param0: string, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module debug {
				export module listener {
					export class ImageLoadingTimeListener extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.debug.listener.ImageLoadingTimeListener>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.debug.listener.ImageLoadingTimeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFinalImageSet(param0: number): void;
						});
						public constructor();
						public onFinalImageSet(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ArrayDrawable extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback, com.facebook.drawee.drawable.TransformCallback, com.facebook.drawee.drawable.TransformAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ArrayDrawable>;
					public getDrawable(param0: number): globalAndroid.graphics.drawable.Drawable;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setDither(param0: boolean): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public isStateful(): boolean;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public onLevelChange(param0: number): boolean;
					public getIntrinsicWidth(): number;
					public setDrawable(param0: number, param1: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor(param0: native.Array<globalAndroid.graphics.drawable.Drawable>);
					public setHotspot(param0: number, param1: number): void;
					public setFilterBitmap(param0: boolean): void;
					public constructor();
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getOpacity(): number;
					public getDrawableParentForIndex(param0: number): com.facebook.drawee.drawable.DrawableParent;
					public getNumberOfLayers(): number;
					public getIntrinsicHeight(): number;
					public setAlpha(param0: number): void;
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class AutoRotateDrawable extends com.facebook.drawee.drawable.ForwardingDrawable implements java.lang.Runnable, com.facebook.drawee.drawable.CloneableDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.AutoRotateDrawable>;
					public reset(): void;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
					public run(): void;
					public cloneDrawable(): com.facebook.drawee.drawable.AutoRotateDrawable;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public setClockwise(param0: boolean): void;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean);
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class CloneableDrawable extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.CloneableDrawable>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.CloneableDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class DrawableParent extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.DrawableParent>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.DrawableParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
						getDrawable(): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class DrawableProperties extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.DrawableProperties>;
					public setDither(param0: boolean): void;
					public setFilterBitmap(param0: boolean): void;
					public constructor();
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public setAlpha(param0: number): void;
					public applyTo(param0: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class DrawableUtils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.DrawableUtils>;
					public constructor();
					public static cloneDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public static copyProperties(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable): void;
					public static multiplyColorAlpha(param0: number, param1: number): number;
					public static setDrawableProperties(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.DrawableProperties): void;
					public static setCallbacks(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable.Callback, param2: com.facebook.drawee.drawable.TransformCallback): void;
					public static getOpacityFromColor(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class FadeDrawable extends com.facebook.drawee.drawable.ArrayDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.FadeDrawable>;
					public static TRANSITION_STARTING: number;
					public static TRANSITION_RUNNING: number;
					public static TRANSITION_NONE: number;
					public invalidateSelf(): void;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public beginBatchMode(): void;
					public setTransitionDuration(param0: number): void;
					public constructor(param0: native.Array<globalAndroid.graphics.drawable.Drawable>);
					public getCurrentTimeMs(): number;
					public getTransitionState(): number;
					public constructor();
					public getTransitionDuration(): number;
					public fadeInLayer(param0: number): void;
					public fadeOutLayer(param0: number): void;
					public finishTransitionImmediately(): void;
					public fadeUpToLayer(param0: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getAlpha(): number;
					public reset(): void;
					public fadeToLayer(param0: number): void;
					public isLayerOn(param0: number): boolean;
					public setAlpha(param0: number): void;
					public endBatchMode(): void;
					public fadeOutAllLayers(): void;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public fadeInAllLayers(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ForwardingDrawable extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Drawable.Callback, com.facebook.drawee.drawable.TransformCallback, com.facebook.drawee.drawable.TransformAwareDrawable, com.facebook.drawee.drawable.DrawableParent {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ForwardingDrawable>;
					public mTransformCallback: com.facebook.drawee.drawable.TransformCallback;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setDither(param0: boolean): void;
					public onStateChange(param0: native.Array<number>): boolean;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public isStateful(): boolean;
					public onLevelChange(param0: number): boolean;
					public getIntrinsicWidth(): number;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setHotspot(param0: number, param1: number): void;
					public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public setFilterBitmap(param0: boolean): void;
					public constructor();
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public getOpacity(): number;
					public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
					public getIntrinsicHeight(): number;
					public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					public setAlpha(param0: number): void;
					public getParentTransform(param0: globalAndroid.graphics.Matrix): void;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public mutate(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setVisible(param0: boolean, param1: boolean): boolean;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setCurrentWithoutInvalidate(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getTransformedBounds(param0: globalAndroid.graphics.RectF): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class MatrixDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.MatrixDrawable>;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public getMatrix(): globalAndroid.graphics.Matrix;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Matrix);
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setMatrix(param0: globalAndroid.graphics.Matrix): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class OrientedDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.OrientedDrawable>;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number);
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public getIntrinsicHeight(): number;
					public getIntrinsicWidth(): number;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ProgressBarDrawable extends globalAndroid.graphics.drawable.Drawable implements com.facebook.drawee.drawable.CloneableDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ProgressBarDrawable>;
					public getBarWidth(): number;
					public setHideWhenZero(param0: boolean): void;
					public getHideWhenZero(): boolean;
					public setColor(param0: number): void;
					public cloneDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getColor(): number;
					public setIsVertical(param0: boolean): void;
					public getIsVertical(): boolean;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public onLevelChange(param0: number): boolean;
					public setBackgroundColor(param0: number): void;
					public setAlpha(param0: number): void;
					public getRadius(): number;
					public setBarWidth(param0: number): void;
					public constructor();
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public setPadding(param0: number): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setRadius(param0: number): void;
					public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public getBackgroundColor(): number;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class Rounded extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.Rounded>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.Rounded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCircle(param0: boolean): void;
						isCircle(): boolean;
						setRadius(param0: number): void;
						setRadii(param0: native.Array<number>): void;
						getRadii(): native.Array<number>;
						setBorder(param0: number, param1: number): void;
						getBorderColor(): number;
						getBorderWidth(): number;
						setPadding(param0: number): void;
						getPadding(): number;
						setScaleDownInsideBorders(param0: boolean): void;
						getScaleDownInsideBorders(): boolean;
					});
					public constructor();
					public setScaleDownInsideBorders(param0: boolean): void;
					public setBorder(param0: number, param1: number): void;
					public getBorderWidth(): number;
					public isCircle(): boolean;
					public getPadding(): number;
					public setCircle(param0: boolean): void;
					public getBorderColor(): number;
					public getRadii(): native.Array<number>;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public setRadii(param0: native.Array<number>): void;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedBitmapDrawable extends globalAndroid.graphics.drawable.BitmapDrawable implements com.facebook.drawee.drawable.TransformAwareDrawable, com.facebook.drawee.drawable.Rounded {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedBitmapDrawable>;
					public constructor(param0: string);
					public getBorderColor(): number;
					public constructor(param0: globalAndroid.content.res.Resources);
					public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.Paint);
					public setRadii(param0: native.Array<number>): void;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public getBorderWidth(): number;
					public constructor(param0: java.io.InputStream);
					public constructor();
					public setCircle(param0: boolean): void;
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public setScaleDownInsideBorders(param0: boolean): void;
					public setBorder(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.graphics.Bitmap);
					public constructor(param0: globalAndroid.content.res.Resources, param1: string);
					public getRadii(): native.Array<number>;
					public setAlpha(param0: number): void;
					public static fromBitmapDrawable(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.drawable.BitmapDrawable): com.facebook.drawee.drawable.RoundedBitmapDrawable;
					public isCircle(): boolean;
					public getPadding(): number;
					public setPadding(param0: number): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setRadius(param0: number): void;
					public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.graphics.Bitmap);
					public constructor(param0: globalAndroid.content.res.Resources, param1: java.io.InputStream);
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedColorDrawable extends globalAndroid.graphics.drawable.Drawable implements com.facebook.drawee.drawable.Rounded {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedColorDrawable>;
					public getBorderColor(): number;
					public setRadii(param0: native.Array<number>): void;
					public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public getBorderWidth(): number;
					public constructor();
					public setCircle(param0: boolean): void;
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
					public static fromColorDrawable(param0: globalAndroid.graphics.drawable.ColorDrawable): com.facebook.drawee.drawable.RoundedColorDrawable;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
					public getOpacity(): number;
					public setScaleDownInsideBorders(param0: boolean): void;
					public getAlpha(): number;
					public setBorder(param0: number, param1: number): void;
					public setColor(param0: number): void;
					public getColor(): number;
					public getRadii(): native.Array<number>;
					public setAlpha(param0: number): void;
					public constructor(param0: native.Array<number>, param1: number);
					public isCircle(): boolean;
					public getPadding(): number;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setPadding(param0: number): void;
					public setRadius(param0: number): void;
					public getScaleDownInsideBorders(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class RoundedCornersDrawable extends com.facebook.drawee.drawable.ForwardingDrawable implements com.facebook.drawee.drawable.Rounded {
					public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedCornersDrawable>;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public getBorderColor(): number;
					public setRadii(param0: native.Array<number>): void;
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getBorderWidth(): number;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public setCircle(param0: boolean): void;
					public getPadding(param0: globalAndroid.graphics.Rect): boolean;
					public setOverlayColor(param0: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					public setScaleDownInsideBorders(param0: boolean): void;
					public setBorder(param0: number, param1: number): void;
					public getRadii(): native.Array<number>;
					public getOverlayColor(): number;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setType(param0: com.facebook.drawee.drawable.RoundedCornersDrawable.Type): void;
					public isCircle(): boolean;
					public getPadding(): number;
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public setPadding(param0: number): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public setRadius(param0: number): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public getScaleDownInsideBorders(): boolean;
				}
				export module RoundedCornersDrawable {
					export class Type {
						public static class: java.lang.Class<com.facebook.drawee.drawable.RoundedCornersDrawable.Type>;
						public static OVERLAY_COLOR: com.facebook.drawee.drawable.RoundedCornersDrawable.Type;
						public static CLIPPING: com.facebook.drawee.drawable.RoundedCornersDrawable.Type;
						public static valueOf(param0: string): com.facebook.drawee.drawable.RoundedCornersDrawable.Type;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.facebook.drawee.drawable.RoundedCornersDrawable.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ScaleTypeDrawable extends com.facebook.drawee.drawable.ForwardingDrawable {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ScaleTypeDrawable>;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setFocusPoint(param0: globalAndroid.graphics.PointF): void;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType);
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setCurrent(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public getScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getFocusPoint(): globalAndroid.graphics.PointF;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public setScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class ScalingUtils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils>;
					public static getActiveScaleTypeDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.drawable.ScaleTypeDrawable;
					public constructor();
				}
				export module ScalingUtils {
					export abstract class AbstractScaleType extends java.lang.Object implements com.facebook.drawee.drawable.ScalingUtils.ScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType>;
						public constructor();
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					}
					export class InterpolatingScaleType extends java.lang.Object implements com.facebook.drawee.drawable.ScalingUtils.ScaleType, com.facebook.drawee.drawable.ScalingUtils.StatefulScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.InterpolatingScaleType>;
						public constructor(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType);
						public getScaleTypeFrom(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getFocusPointFrom(): globalAndroid.graphics.PointF;
						public toString(): string;
						public getBoundsTo(): globalAndroid.graphics.Rect;
						public getBoundsFrom(): globalAndroid.graphics.Rect;
						public getFocusPointTo(): globalAndroid.graphics.PointF;
						public getScaleTypeTo(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public constructor(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect, param4: globalAndroid.graphics.PointF, param5: globalAndroid.graphics.PointF);
						public constructor(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.Rect, param3: globalAndroid.graphics.Rect);
						public setValue(param0: number): void;
						public getState(): any;
						public getValue(): number;
					}
					export class ScaleType extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleType>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$ScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
							<clinit>(): void;
						});
						public constructor();
						public static FIT_CENTER: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static CENTER_CROP: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_XY: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static CENTER: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FOCUS_CROP: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_BOTTOM_START: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_START: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static CENTER_INSIDE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public static FIT_END: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
					}
					export class ScaleTypeCenter extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeCenter>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeCenterCrop extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeCenterCrop>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeCenterInside extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeCenterInside>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitBottomStart extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitBottomStart>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitCenter extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitCenter>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitEnd extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitEnd>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitStart extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitStart>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeFitXY extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFitXY>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class ScaleTypeFocusCrop extends com.facebook.drawee.drawable.ScalingUtils.AbstractScaleType {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.ScaleTypeFocusCrop>;
						public static INSTANCE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
						public getTransform(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Matrix;
						public getTransformImpl(param0: globalAndroid.graphics.Matrix, param1: globalAndroid.graphics.Rect, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
						public toString(): string;
					}
					export class StatefulScaleType extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.drawable.ScalingUtils.StatefulScaleType>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.drawable.ScalingUtils$StatefulScaleType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getState(): any;
						});
						public constructor();
						public getState(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class TransformAwareDrawable extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.TransformAwareDrawable>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.TransformAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
					});
					public constructor();
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class TransformCallback extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.TransformCallback>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.TransformCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTransform(param0: globalAndroid.graphics.Matrix): void;
						getRootBounds(param0: globalAndroid.graphics.RectF): void;
					});
					public constructor();
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class VisibilityAwareDrawable extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.VisibilityAwareDrawable>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityAwareDrawable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
					});
					public constructor();
					public setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module drawable {
				export class VisibilityCallback extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.drawable.VisibilityCallback>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.drawable.VisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onVisibilityChange(param0: boolean): void;
						onDraw(): void;
					});
					public constructor();
					public onDraw(): void;
					public onVisibilityChange(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class GenericDraweeHierarchy extends java.lang.Object implements com.facebook.drawee.interfaces.SettableDraweeHierarchy {
					public static class: java.lang.Class<com.facebook.drawee.generic.GenericDraweeHierarchy>;
					public setPlaceholderImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
					public hasPlaceholderImage(): boolean;
					public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setActualImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setBackgroundImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setOverlayImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setPlaceholderImageFocusPoint(param0: globalAndroid.graphics.PointF): void;
					public setRetryImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setFailureImage(param0: number): void;
					public setProgressBarImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setProgressBarImage(param0: number): void;
					public setRoundingParams(param0: com.facebook.drawee.generic.RoundingParams): void;
					public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setRetry(param0: java.lang.Throwable): void;
					public setPlaceholderImage(param0: number): void;
					public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setFailureImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public reset(): void;
					public getFadeDuration(): number;
					public setFadeDuration(param0: number): void;
					public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setFailure(param0: java.lang.Throwable): void;
					public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): void;
					public setProgress(param0: number, param1: boolean): void;
					public getActualImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getActualImageBounds(param0: globalAndroid.graphics.RectF): void;
					public setActualImageFocusPoint(param0: globalAndroid.graphics.PointF): void;
					public getRoundingParams(): com.facebook.drawee.generic.RoundingParams;
					public setActualImageColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
					public setRetryImage(param0: number): void;
					public setOverlayImage(param0: number, param1: globalAndroid.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class GenericDraweeHierarchyBuilder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.generic.GenericDraweeHierarchyBuilder>;
					public static DEFAULT_FADE_DURATION: number;
					public static DEFAULT_SCALE_TYPE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public static DEFAULT_ACTUAL_IMAGE_SCALE_TYPE: com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getResources(): globalAndroid.content.res.Resources;
					public setProgressBarImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRetryImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setOverlays(param0: java.util.List<globalAndroid.graphics.drawable.Drawable>): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setProgressBarImage(param0: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getPlaceholderImage(): globalAndroid.graphics.drawable.Drawable;
					public setPressedStateOverlay(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRetryImage(param0: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getPressedStateOverlay(): globalAndroid.graphics.drawable.Drawable;
					public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getActualImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getActualImageFocusPoint(): globalAndroid.graphics.PointF;
					public setActualImageColorFilter(param0: globalAndroid.graphics.ColorFilter): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getDesiredAspectRatio(): number;
					public setRetryImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getProgressBarImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public setFailureImage(param0: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getRoundingParams(): com.facebook.drawee.generic.RoundingParams;
					public getProgressBarImage(): globalAndroid.graphics.drawable.Drawable;
					public setOverlay(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getBackground(): globalAndroid.graphics.drawable.Drawable;
					public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public constructor(param0: globalAndroid.content.res.Resources);
					public static newInstance(param0: globalAndroid.content.res.Resources): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setRetryImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setBackground(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getFailureImage(): globalAndroid.graphics.drawable.Drawable;
					public setRoundingParams(param0: com.facebook.drawee.generic.RoundingParams): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getFailureImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public setFailureImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setDesiredAspectRatio(param0: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImage(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFailureImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public getActualImageColorFilter(): globalAndroid.graphics.ColorFilter;
					public getOverlays(): java.util.List<globalAndroid.graphics.drawable.Drawable>;
					public getRetryImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getPlaceholderImageScaleType(): com.facebook.drawee.drawable.ScalingUtils.ScaleType;
					public getRetryImage(): globalAndroid.graphics.drawable.Drawable;
					public getFadeDuration(): number;
					public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setProgressBarImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFailureImage(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public reset(): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImage(param0: number, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setProgressBarImage(param0: globalAndroid.graphics.drawable.Drawable): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setFadeDuration(param0: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setActualImageFocusPoint(param0: globalAndroid.graphics.PointF): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setPlaceholderImage(param0: number): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public setActualImageScaleType(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public build(): com.facebook.drawee.generic.GenericDraweeHierarchy;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class GenericDraweeHierarchyInflater extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.generic.GenericDraweeHierarchyInflater>;
					public static updateBuilder(param0: com.facebook.drawee.generic.GenericDraweeHierarchyBuilder, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public static inflateBuilder(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
					public constructor();
					public static inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): com.facebook.drawee.generic.GenericDraweeHierarchy;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class RootDrawable extends com.facebook.drawee.drawable.ForwardingDrawable implements com.facebook.drawee.drawable.VisibilityAwareDrawable {
					public static class: java.lang.Class<com.facebook.drawee.generic.RootDrawable>;
					public getRootBounds(param0: globalAndroid.graphics.RectF): void;
					public setVisibilityCallback(param0: com.facebook.drawee.drawable.VisibilityCallback): void;
					public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getIntrinsicHeight(): number;
					public getIntrinsicWidth(): number;
					public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					public getDrawable(): globalAndroid.graphics.drawable.Drawable;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
					public constructor();
					public setVisible(param0: boolean, param1: boolean): boolean;
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public getTransform(param0: globalAndroid.graphics.Matrix): void;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public setTransformCallback(param0: com.facebook.drawee.drawable.TransformCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class RoundingParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.generic.RoundingParams>;
					public setPadding(param0: number): com.facebook.drawee.generic.RoundingParams;
					public getBorderColor(): number;
					public static fromCornersRadii(param0: number, param1: number, param2: number, param3: number): com.facebook.drawee.generic.RoundingParams;
					public setScaleDownInsideBorders(param0: boolean): com.facebook.drawee.generic.RoundingParams;
					public getCornersRadii(): native.Array<number>;
					public getBorderWidth(): number;
					public constructor();
					public setRoundAsCircle(param0: boolean): com.facebook.drawee.generic.RoundingParams;
					public setCornersRadii(param0: number, param1: number, param2: number, param3: number): com.facebook.drawee.generic.RoundingParams;
					public hashCode(): number;
					public static fromCornersRadius(param0: number): com.facebook.drawee.generic.RoundingParams;
					public setBorderColor(param0: number): com.facebook.drawee.generic.RoundingParams;
					public setRoundingMethod(param0: com.facebook.drawee.generic.RoundingParams.RoundingMethod): com.facebook.drawee.generic.RoundingParams;
					public setOverlayColor(param0: number): com.facebook.drawee.generic.RoundingParams;
					public getOverlayColor(): number;
					public getRoundAsCircle(): boolean;
					public setCornersRadius(param0: number): com.facebook.drawee.generic.RoundingParams;
					public equals(param0: any): boolean;
					public getRoundingMethod(): com.facebook.drawee.generic.RoundingParams.RoundingMethod;
					public static fromCornersRadii(param0: native.Array<number>): com.facebook.drawee.generic.RoundingParams;
					public static asCircle(): com.facebook.drawee.generic.RoundingParams;
					public setBorder(param0: number, param1: number): com.facebook.drawee.generic.RoundingParams;
					public getPadding(): number;
					public setBorderWidth(param0: number): com.facebook.drawee.generic.RoundingParams;
					public setCornersRadii(param0: native.Array<number>): com.facebook.drawee.generic.RoundingParams;
					public getScaleDownInsideBorders(): boolean;
				}
				export module RoundingParams {
					export class RoundingMethod {
						public static class: java.lang.Class<com.facebook.drawee.generic.RoundingParams.RoundingMethod>;
						public static OVERLAY_COLOR: com.facebook.drawee.generic.RoundingParams.RoundingMethod;
						public static BITMAP_ONLY: com.facebook.drawee.generic.RoundingParams.RoundingMethod;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static values(): native.Array<com.facebook.drawee.generic.RoundingParams.RoundingMethod>;
						public static valueOf(param0: string): com.facebook.drawee.generic.RoundingParams.RoundingMethod;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module generic {
				export class WrappingUtils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.generic.WrappingUtils>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module gestures {
				export class GestureDetector extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.gestures.GestureDetector>;
					public constructor(param0: globalAndroid.content.Context);
					public reset(): void;
					public static newInstance(param0: globalAndroid.content.Context): com.facebook.drawee.gestures.GestureDetector;
					public isCapturingGesture(): boolean;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public init(): void;
					public setClickListener(param0: com.facebook.drawee.gestures.GestureDetector.ClickListener): void;
				}
				export module GestureDetector {
					export class ClickListener extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.gestures.GestureDetector.ClickListener>;
						/**
						 * Constructs a new instance of the com.facebook.drawee.gestures.GestureDetector$ClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onClick(): boolean;
						});
						public constructor();
						public onClick(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class DraweeController extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.DraweeController>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
						setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
						onAttach(): void;
						onDetach(): void;
						onViewportVisibilityHint(param0: boolean): void;
						onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						getAnimatable(): globalAndroid.graphics.drawable.Animatable;
						setContentDescription(param0: string): void;
						getContentDescription(): string;
						isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
					});
					public constructor();
					public setHierarchy(param0: com.facebook.drawee.interfaces.DraweeHierarchy): void;
					public setContentDescription(param0: string): void;
					public onDetach(): void;
					public getAnimatable(): globalAndroid.graphics.drawable.Animatable;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public isSameImageRequest(param0: com.facebook.drawee.interfaces.DraweeController): boolean;
					public onAttach(): void;
					public getHierarchy(): com.facebook.drawee.interfaces.DraweeHierarchy;
					public onViewportVisibilityHint(param0: boolean): void;
					public getContentDescription(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class DraweeHierarchy extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.DraweeHierarchy>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.DraweeHierarchy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class SettableDraweeHierarchy extends java.lang.Object implements com.facebook.drawee.interfaces.DraweeHierarchy {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.SettableDraweeHierarchy>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.SettableDraweeHierarchy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						reset(): void;
						setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
						setProgress(param0: number, param1: boolean): void;
						setFailure(param0: java.lang.Throwable): void;
						setRetry(param0: java.lang.Throwable): void;
						setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
						getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public reset(): void;
					public setProgress(param0: number, param1: boolean): void;
					public setImage(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: boolean): void;
					public setControllerOverlay(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setRetry(param0: java.lang.Throwable): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public setFailure(param0: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module interfaces {
				export class SimpleDraweeControllerBuilder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder>;
					/**
					 * Constructs a new instance of the com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
						build(): com.facebook.drawee.interfaces.DraweeController;
					});
					public constructor();
					public setOldController(param0: com.facebook.drawee.interfaces.DraweeController): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public setUri(param0: string): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public setCallerContext(param0: any): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
					public build(): com.facebook.drawee.interfaces.DraweeController;
					public setUri(param0: globalAndroid.net.Uri): com.facebook.drawee.interfaces.SimpleDraweeControllerBuilder;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class AspectRatioMeasure extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.view.AspectRatioMeasure>;
					public constructor();
					public static updateMeasureSpec(param0: com.facebook.drawee.view.AspectRatioMeasure.Spec, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams, param3: number, param4: number): void;
				}
				export module AspectRatioMeasure {
					export class Spec extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.drawee.view.AspectRatioMeasure.Spec>;
						public width: number;
						public height: number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class DraweeHolder<DH>  extends com.facebook.drawee.drawable.VisibilityCallback {
					public static class: java.lang.Class<com.facebook.drawee.view.DraweeHolder<any>>;
					public static create(param0: com.facebook.drawee.interfaces.DraweeHierarchy, param1: globalAndroid.content.Context): com.facebook.drawee.view.DraweeHolder<any>;
					public hasHierarchy(): boolean;
					public getDraweeEventTracker(): com.facebook.drawee.components.DraweeEventTracker;
					public constructor(param0: any);
					public onAttach(): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public registerWithContext(param0: globalAndroid.content.Context): void;
					public setController(param0: com.facebook.drawee.interfaces.DraweeController): void;
					public getHierarchy(): any;
					public toString(): string;
					public onDraw(): void;
					public setHierarchy(param0: any): void;
					public onVisibilityChange(param0: boolean): void;
					public onDetach(): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public getController(): com.facebook.drawee.interfaces.DraweeController;
					public isAttached(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class DraweeTransition {
					public static class: java.lang.Class<com.facebook.drawee.view.DraweeTransition>;
					public captureStartValues(param0: globalAndroid.transition.TransitionValues): void;
					public constructor(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType);
					public createAnimator(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.transition.TransitionValues, param2: globalAndroid.transition.TransitionValues): globalAndroid.animation.Animator;
					public constructor(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF);
					public captureEndValues(param0: globalAndroid.transition.TransitionValues): void;
					public static createTransitionSet(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType): globalAndroid.transition.TransitionSet;
					public static createTransitionSet(param0: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param1: com.facebook.drawee.drawable.ScalingUtils.ScaleType, param2: globalAndroid.graphics.PointF, param3: globalAndroid.graphics.PointF): globalAndroid.transition.TransitionSet;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class DraweeView<DH>  extends globalAndroid.widget.ImageView {
					public static class: java.lang.Class<com.facebook.drawee.view.DraweeView<any>>;
					public static setGlobalLegacyVisibilityHandlingEnabled(param0: boolean): void;
					public setAspectRatio(param0: number): void;
					public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getAspectRatio(): number;
					public doDetach(): void;
					public onAttach(): void;
					public onAttachedToWindow(): void;
					public getTopLevelDrawable(): globalAndroid.graphics.drawable.Drawable;
					public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setImageURI(param0: globalAndroid.net.Uri): void;
					public getHierarchy(): any;
					public toString(): string;
					public onFinishTemporaryDetach(): void;
					public setLegacyVisibilityHandlingEnabled(param0: boolean): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onDetach(): void;
					public setImageResource(param0: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public hasHierarchy(): boolean;
					public hasController(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public doAttach(): void;
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onStartTemporaryDetach(): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setController(param0: com.facebook.drawee.interfaces.DraweeController): void;
					public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setHierarchy(param0: any): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public getController(): com.facebook.drawee.interfaces.DraweeController;
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class GenericDraweeView extends com.facebook.drawee.view.DraweeView<com.facebook.drawee.generic.GenericDraweeHierarchy> {
					public static class: java.lang.Class<com.facebook.drawee.view.GenericDraweeView>;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: com.facebook.drawee.generic.GenericDraweeHierarchy);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public inflateHierarchy(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
					public sendAccessibilityEvent(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class MultiDraweeHolder<DH>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.drawee.view.MultiDraweeHolder<any>>;
					public add(param0: number, param1: com.facebook.drawee.view.DraweeHolder<DH>): void;
					public constructor();
					public draw(param0: globalAndroid.graphics.Canvas): void;
					public clear(): void;
					public onDetach(): void;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
					public onAttach(): void;
					public get(param0: number): com.facebook.drawee.view.DraweeHolder<DH>;
					public size(): number;
					public remove(param0: number): void;
					public add(param0: com.facebook.drawee.view.DraweeHolder<DH>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module drawee {
			export module view {
				export class SimpleDraweeView extends com.facebook.drawee.view.GenericDraweeView {
					public static class: java.lang.Class<com.facebook.drawee.view.SimpleDraweeView>;
					public getControllerBuilder(): com.facebook.drawee.controller.AbstractDraweeControllerBuilder<any,any,any,any>;
					public constructor(param0: globalAndroid.content.Context, param1: com.facebook.drawee.generic.GenericDraweeHierarchy);
					public static initialize(param0: com.facebook.common.internal.Supplier<any>): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setImageURI(param0: globalAndroid.net.Uri): void;
					public setImageURI(param0: string): void;
					public setImageURI(param0: string, param1: any): void;
					public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setImageResource(param0: number): void;
					public sendAccessibilityEvent(param0: number): void;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public static shutDown(): void;
					public setImageRequest(param0: com.facebook.imagepipeline.request.ImageRequest): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
					public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
					public setActualImageResource(param0: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public setImageURI(param0: globalAndroid.net.Uri, param1: any): void;
					public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
					public setActualImageResource(param0: number, param1: any): void;
					public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fbcore {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.fbcore.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module backend {
					export class AnimationBackend extends java.lang.Object implements com.facebook.fresco.animation.backend.AnimationInformation {
						public static class: java.lang.Class<com.facebook.fresco.animation.backend.AnimationBackend>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.animation.backend.AnimationBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
							setAlpha(param0: number): void;
							setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							setBounds(param0: globalAndroid.graphics.Rect): void;
							getIntrinsicWidth(): number;
							getIntrinsicHeight(): number;
							getSizeInBytes(): number;
							clear(): void;
							getFrameCount(): number;
							getFrameDurationMs(param0: number): number;
							getLoopCount(): number;
						});
						public constructor();
						public static INTRINSIC_DIMENSION_UNSET: number;
						public static LOOP_COUNT_INFINITE: number;
						public getIntrinsicWidth(): number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getIntrinsicHeight(): number;
						public getLoopCount(): number;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public clear(): void;
						public getFrameCount(): number;
						public getFrameDurationMs(param0: number): number;
						public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
						public setAlpha(param0: number): void;
						public getSizeInBytes(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module backend {
					export class AnimationBackendDelegate<T>  extends com.facebook.fresco.animation.backend.AnimationBackend {
						public static class: java.lang.Class<com.facebook.fresco.animation.backend.AnimationBackendDelegate<any>>;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public getLoopCount(): number;
						public getAnimationBackend(): any;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public getFrameCount(): number;
						public constructor(param0: any);
						public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
						public setAlpha(param0: number): void;
						public getSizeInBytes(): number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public setAnimationBackend(param0: any): void;
						public getFrameDurationMs(param0: number): number;
						public clear(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module backend {
					export class AnimationBackendDelegateWithInactivityCheck<T>  extends com.facebook.fresco.animation.backend.AnimationBackendDelegate<any> {
						public static class: java.lang.Class<com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck<any>>;
						public getIntrinsicWidth(): number;
						public setInactivityCheckPollingTimeMs(param0: number): void;
						public getIntrinsicHeight(): number;
						public getInactivityThresholdMs(): number;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
						public setAlpha(param0: number): void;
						public getSizeInBytes(): number;
						public setInactivityListener(param0: com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck.InactivityListener): void;
						public setInactivityThresholdMs(param0: number): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getInactivityCheckPollingTimeMs(): number;
						public static createForBackend(param0: com.facebook.fresco.animation.backend.AnimationBackend, param1: com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck.InactivityListener, param2: com.facebook.common.time.MonotonicClock, param3: java.util.concurrent.ScheduledExecutorService): com.facebook.fresco.animation.backend.AnimationBackendDelegate<any>;
						public clear(): void;
						public static createForBackend(param0: com.facebook.fresco.animation.backend.AnimationBackend, param1: com.facebook.common.time.MonotonicClock, param2: java.util.concurrent.ScheduledExecutorService): com.facebook.fresco.animation.backend.AnimationBackendDelegate<any>;
					}
					export module AnimationBackendDelegateWithInactivityCheck {
						export class InactivityListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck.InactivityListener>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck$InactivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInactive(): void;
							});
							public constructor();
							public onInactive(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module backend {
					export class AnimationInformation extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.animation.backend.AnimationInformation>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.animation.backend.AnimationInformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFrameCount(): number;
							getFrameDurationMs(param0: number): number;
							getLoopCount(): number;
						});
						public constructor();
						public static LOOP_COUNT_INFINITE: number;
						public getLoopCount(): number;
						public getFrameCount(): number;
						public getFrameDurationMs(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export class BitmapAnimationBackend extends java.lang.Object implements com.facebook.fresco.animation.backend.AnimationBackend, com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck.InactivityListener {
						public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.BitmapAnimationBackend>;
						public static FRAME_TYPE_UNKNOWN: number;
						public static FRAME_TYPE_CACHED: number;
						public static FRAME_TYPE_REUSED: number;
						public static FRAME_TYPE_CREATED: number;
						public static FRAME_TYPE_FALLBACK: number;
						public setBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): void;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public getLoopCount(): number;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public getFrameCount(): number;
						public drawFrame(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.Canvas, param2: number): boolean;
						public constructor(param0: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param1: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param2: com.facebook.fresco.animation.backend.AnimationInformation, param3: com.facebook.fresco.animation.bitmap.BitmapFrameRenderer, param4: com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparationStrategy, param5: com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer);
						public setAlpha(param0: number): void;
						public getSizeInBytes(): number;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public onInactive(): void;
						public getFrameDurationMs(param0: number): number;
						public clear(): void;
						public setFrameListener(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend.FrameListener): void;
					}
					export module BitmapAnimationBackend {
						export class FrameListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.BitmapAnimationBackend.FrameListener>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapAnimationBackend$FrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDrawFrameStart(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend, param1: number): void;
								onFrameDrawn(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend, param1: number, param2: number): void;
								onFrameDropped(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend, param1: number): void;
							});
							public constructor();
							public onFrameDrawn(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend, param1: number, param2: number): void;
							public onDrawFrameStart(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend, param1: number): void;
							public onFrameDropped(param0: com.facebook.fresco.animation.bitmap.BitmapAnimationBackend, param1: number): void;
						}
						export class FrameType extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.BitmapAnimationBackend.FrameType>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapAnimationBackend$FrameType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								annotationType(): java.lang.Class<any>;
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export class BitmapFrameCache extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.BitmapFrameCache>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapFrameCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCachedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							getFallbackFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							getBitmapToReuseForFrame(param0: number, param1: number, param2: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							contains(param0: number): boolean;
							getSizeInBytes(): number;
							clear(): void;
							onFrameRendered(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
							onFramePrepared(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
							setFrameCacheListener(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache.FrameCacheListener): void;
						});
						public constructor();
						public contains(param0: number): boolean;
						public getCachedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public getFallbackFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public setFrameCacheListener(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache.FrameCacheListener): void;
						public onFramePrepared(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
						public clear(): void;
						public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public getSizeInBytes(): number;
						public onFrameRendered(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
					}
					export module BitmapFrameCache {
						export class FrameCacheListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.BitmapFrameCache.FrameCacheListener>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapFrameCache$FrameCacheListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFrameCached(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: number): void;
								onFrameEvicted(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: number): void;
							});
							public constructor();
							public onFrameCached(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: number): void;
							public onFrameEvicted(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export class BitmapFrameRenderer extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.BitmapFrameRenderer>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.BitmapFrameRenderer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): boolean;
							setBounds(param0: globalAndroid.graphics.Rect): void;
							getIntrinsicWidth(): number;
							getIntrinsicHeight(): number;
						});
						public constructor();
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module cache {
						export class FrescoFrameCache extends java.lang.Object implements com.facebook.fresco.animation.bitmap.BitmapFrameCache {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.cache.FrescoFrameCache>;
							public setFrameCacheListener(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache.FrameCacheListener): void;
							public onFrameRendered(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
							public clear(): void;
							public getCachedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public constructor(param0: com.facebook.imagepipeline.animated.impl.AnimatedFrameCache, param1: boolean);
							public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public contains(param0: number): boolean;
							public getFallbackFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public getSizeInBytes(): number;
							public onFramePrepared(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module cache {
						export class KeepLastFrameCache extends java.lang.Object implements com.facebook.fresco.animation.bitmap.BitmapFrameCache {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.cache.KeepLastFrameCache>;
							public constructor();
							public setFrameCacheListener(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache.FrameCacheListener): void;
							public onFrameRendered(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
							public clear(): void;
							public getCachedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public contains(param0: number): boolean;
							public getFallbackFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public getSizeInBytes(): number;
							public onFramePrepared(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module cache {
						export class NoOpCache extends java.lang.Object implements com.facebook.fresco.animation.bitmap.BitmapFrameCache {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.cache.NoOpCache>;
							public constructor();
							public setFrameCacheListener(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache.FrameCacheListener): void;
							public onFrameRendered(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
							public clear(): void;
							public getCachedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public getBitmapToReuseForFrame(param0: number, param1: number, param2: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public contains(param0: number): boolean;
							public getFallbackFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public getSizeInBytes(): number;
							public onFramePrepared(param0: number, param1: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module preparation {
						export class BitmapFramePreparationStrategy extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparationStrategy>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparationStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								prepareFrames(param0: com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer, param1: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param2: com.facebook.fresco.animation.backend.AnimationBackend, param3: number): void;
							});
							public constructor();
							public prepareFrames(param0: com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer, param1: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param2: com.facebook.fresco.animation.backend.AnimationBackend, param3: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module preparation {
						export class BitmapFramePreparer extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								prepareFrame(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: com.facebook.fresco.animation.backend.AnimationBackend, param2: number): boolean;
							});
							public constructor();
							public prepareFrame(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: com.facebook.fresco.animation.backend.AnimationBackend, param2: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module preparation {
						export class DefaultBitmapFramePreparer extends java.lang.Object implements com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.preparation.DefaultBitmapFramePreparer>;
							public prepareFrame(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: com.facebook.fresco.animation.backend.AnimationBackend, param2: number): boolean;
							public constructor(param0: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param1: com.facebook.fresco.animation.bitmap.BitmapFrameRenderer, param2: globalAndroid.graphics.Bitmap.Config, param3: java.util.concurrent.ExecutorService);
						}
						export module DefaultBitmapFramePreparer {
							export class FrameDecodeRunnable extends java.lang.Object implements java.lang.Runnable {
								public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.preparation.DefaultBitmapFramePreparer.FrameDecodeRunnable>;
								public constructor(param0: com.facebook.fresco.animation.bitmap.preparation.DefaultBitmapFramePreparer, param1: com.facebook.fresco.animation.backend.AnimationBackend, param2: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param3: number, param4: number);
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module preparation {
						export class FixedNumberBitmapFramePreparationStrategy extends java.lang.Object implements com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparationStrategy {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.preparation.FixedNumberBitmapFramePreparationStrategy>;
							public constructor();
							public prepareFrames(param0: com.facebook.fresco.animation.bitmap.preparation.BitmapFramePreparer, param1: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param2: com.facebook.fresco.animation.backend.AnimationBackend, param3: number): void;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module wrapper {
						export class AnimatedDrawableBackendAnimationInformation extends java.lang.Object implements com.facebook.fresco.animation.backend.AnimationInformation {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.wrapper.AnimatedDrawableBackendAnimationInformation>;
							public constructor(param0: com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend);
							public getFrameCount(): number;
							public getLoopCount(): number;
							public getFrameDurationMs(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module bitmap {
					export module wrapper {
						export class AnimatedDrawableBackendFrameRenderer extends java.lang.Object implements com.facebook.fresco.animation.bitmap.BitmapFrameRenderer {
							public static class: java.lang.Class<com.facebook.fresco.animation.bitmap.wrapper.AnimatedDrawableBackendFrameRenderer>;
							public constructor(param0: com.facebook.fresco.animation.bitmap.BitmapFrameCache, param1: com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend);
							public renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): boolean;
							public getIntrinsicWidth(): number;
							public setBounds(param0: globalAndroid.graphics.Rect): void;
							public getIntrinsicHeight(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module drawable {
					export class AnimatedDrawable2 extends globalAndroid.graphics.drawable.Drawable implements globalAndroid.graphics.drawable.Animatable, com.facebook.drawable.base.DrawableWithCaches {
						public static class: java.lang.Class<com.facebook.fresco.animation.drawable.AnimatedDrawable2>;
						public onLevelChange(param0: number): boolean;
						public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public getAnimationBackend(): com.facebook.fresco.animation.backend.AnimationBackend;
						public getStartTimeMs(): number;
						public setAnimationBackend(param0: com.facebook.fresco.animation.backend.AnimationBackend): void;
						public isRunning(): boolean;
						public dropCaches(): void;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getLoopDurationMs(): number;
						public setDrawListener(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2.DrawListener): void;
						public jumpToFrame(param0: number): void;
						public constructor();
						public constructor(param0: com.facebook.fresco.animation.backend.AnimationBackend);
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setFrameSchedulingDelayMs(param0: number): void;
						public getLoopCount(): number;
						public setFrameSchedulingOffsetMs(param0: number): void;
						public getOpacity(): number;
						public isInfiniteAnimation(): boolean;
						public getFrameCount(): number;
						public stop(): void;
						public setAlpha(param0: number): void;
						public getDroppedFrames(): number;
						public start(): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setAnimationListener(param0: com.facebook.fresco.animation.drawable.AnimationListener): void;
					}
					export module AnimatedDrawable2 {
						export class DrawListener extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.drawable.AnimatedDrawable2.DrawListener>;
							/**
							 * Constructs a new instance of the com.facebook.fresco.animation.drawable.AnimatedDrawable2$DrawListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDraw(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: com.facebook.fresco.animation.frame.FrameScheduler, param2: number, param3: boolean, param4: boolean, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): void;
							});
							public constructor();
							public onDraw(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: com.facebook.fresco.animation.frame.FrameScheduler, param2: number, param3: boolean, param4: boolean, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module drawable {
					export class AnimatedDrawable2DebugDrawListener extends java.lang.Object implements com.facebook.fresco.animation.drawable.AnimatedDrawable2.DrawListener {
						public static class: java.lang.Class<com.facebook.fresco.animation.drawable.AnimatedDrawable2DebugDrawListener>;
						public onDraw(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: com.facebook.fresco.animation.frame.FrameScheduler, param2: number, param3: boolean, param4: boolean, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number): void;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module drawable {
					export class AnimationListener extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.animation.drawable.AnimationListener>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.animation.drawable.AnimationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onAnimationStart(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
							onAnimationStop(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
							onAnimationReset(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
							onAnimationRepeat(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
							onAnimationFrame(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: number): void;
						});
						public constructor();
						public onAnimationStart(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
						public onAnimationReset(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
						public onAnimationFrame(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: number): void;
						public onAnimationRepeat(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
						public onAnimationStop(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module drawable {
					export class BaseAnimationListener extends java.lang.Object implements com.facebook.fresco.animation.drawable.AnimationListener {
						public static class: java.lang.Class<com.facebook.fresco.animation.drawable.BaseAnimationListener>;
						public constructor();
						public onAnimationStart(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
						public onAnimationReset(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
						public onAnimationFrame(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: number): void;
						public onAnimationRepeat(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
						public onAnimationStop(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module drawable {
					export module animator {
						export class AnimatedDrawable2ValueAnimatorHelper extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.drawable.animator.AnimatedDrawable2ValueAnimatorHelper>;
							public static createValueAnimator(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): globalAndroid.animation.ValueAnimator;
							public static createAnimatorUpdateListener(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2): globalAndroid.animation.ValueAnimator.AnimatorUpdateListener;
							public static createValueAnimator(param0: com.facebook.fresco.animation.drawable.AnimatedDrawable2, param1: number): globalAndroid.animation.ValueAnimator;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module drawable {
					export module animator {
						export class AnimatedDrawableValueAnimatorHelper extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.fresco.animation.drawable.animator.AnimatedDrawableValueAnimatorHelper>;
							public static createValueAnimator(param0: globalAndroid.graphics.drawable.Drawable, param1: number): globalAndroid.animation.ValueAnimator;
							public static createValueAnimator(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.animation.ValueAnimator;
							public static createAnimatorUpdateListener(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.animation.ValueAnimator.AnimatorUpdateListener;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module factory {
					export class AnimatedFactoryV2Impl extends java.lang.Object implements com.facebook.imagepipeline.animated.factory.AnimatedFactory {
						public static class: java.lang.Class<com.facebook.fresco.animation.factory.AnimatedFactoryV2Impl>;
						public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
						public constructor(param0: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param1: com.facebook.imagepipeline.core.ExecutorSupplier, param2: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>);
						public getGifDecoder(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.decoder.ImageDecoder;
						public getWebPDecoder(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.decoder.ImageDecoder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module factory {
					export class ExperimentalBitmapAnimationDrawableFactory extends java.lang.Object implements com.facebook.imagepipeline.drawable.DrawableFactory {
						public static class: java.lang.Class<com.facebook.fresco.animation.factory.ExperimentalBitmapAnimationDrawableFactory>;
						public static CACHING_STRATEGY_NO_CACHE: number;
						public static CACHING_STRATEGY_FRESCO_CACHE: number;
						public static CACHING_STRATEGY_FRESCO_CACHE_NO_REUSING: number;
						public static CACHING_STRATEGY_KEEP_LAST_CACHE: number;
						public createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): com.facebook.fresco.animation.drawable.AnimatedDrawable2;
						public supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
						public createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: com.facebook.imagepipeline.animated.impl.AnimatedDrawableBackendProvider, param1: java.util.concurrent.ScheduledExecutorService, param2: java.util.concurrent.ExecutorService, param3: com.facebook.common.time.MonotonicClock, param4: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param5: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param6: com.facebook.common.internal.Supplier<java.lang.Integer>, param7: com.facebook.common.internal.Supplier<java.lang.Integer>);
					}
					export module ExperimentalBitmapAnimationDrawableFactory {
						export class AnimationFrameCacheKey extends java.lang.Object implements com.facebook.cache.common.CacheKey {
							public static class: java.lang.Class<com.facebook.fresco.animation.factory.ExperimentalBitmapAnimationDrawableFactory.AnimationFrameCacheKey>;
							public getUriString(): string;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number);
							public containsUri(param0: globalAndroid.net.Uri): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module frame {
					export class DropFramesFrameScheduler extends java.lang.Object implements com.facebook.fresco.animation.frame.FrameScheduler {
						public static class: java.lang.Class<com.facebook.fresco.animation.frame.DropFramesFrameScheduler>;
						public getFrameNumberToRender(param0: number, param1: number): number;
						public constructor(param0: com.facebook.fresco.animation.backend.AnimationInformation);
						public getLoopDurationMs(): number;
						public isInfiniteAnimation(): boolean;
						public getTargetRenderTimeMs(param0: number): number;
						public getTargetRenderTimeForNextFrameMs(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module fresco {
			export module animation {
				export module frame {
					export class FrameScheduler extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.fresco.animation.frame.FrameScheduler>;
						/**
						 * Constructs a new instance of the com.facebook.fresco.animation.frame.FrameScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFrameNumberToRender(param0: number, param1: number): number;
							getLoopDurationMs(): number;
							getTargetRenderTimeMs(param0: number): number;
							getTargetRenderTimeForNextFrameMs(param0: number): number;
							isInfiniteAnimation(): boolean;
						});
						public constructor();
						public static FRAME_NUMBER_DONE: number;
						public static NO_NEXT_TARGET_RENDER_TIME: number;
						public getFrameNumberToRender(param0: number, param1: number): number;
						public getLoopDurationMs(): number;
						public isInfiniteAnimation(): boolean;
						public getTargetRenderTimeMs(param0: number): number;
						public getTargetRenderTimeForNextFrameMs(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageformat {
			export class DefaultImageFormatChecker extends java.lang.Object implements com.facebook.imageformat.ImageFormat.FormatChecker {
				public static class: java.lang.Class<com.facebook.imageformat.DefaultImageFormatChecker>;
				public getHeaderSize(): number;
				public determineFormat(param0: native.Array<number>, param1: number): com.facebook.imageformat.ImageFormat;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageformat {
			export class DefaultImageFormats extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageformat.DefaultImageFormats>;
				public static JPEG: com.facebook.imageformat.ImageFormat;
				public static PNG: com.facebook.imageformat.ImageFormat;
				public static GIF: com.facebook.imageformat.ImageFormat;
				public static BMP: com.facebook.imageformat.ImageFormat;
				public static WEBP_SIMPLE: com.facebook.imageformat.ImageFormat;
				public static WEBP_LOSSLESS: com.facebook.imageformat.ImageFormat;
				public static WEBP_EXTENDED: com.facebook.imageformat.ImageFormat;
				public static WEBP_EXTENDED_WITH_ALPHA: com.facebook.imageformat.ImageFormat;
				public static WEBP_ANIMATED: com.facebook.imageformat.ImageFormat;
				public static isStaticWebpFormat(param0: com.facebook.imageformat.ImageFormat): boolean;
				public static getDefaultFormats(): java.util.List<com.facebook.imageformat.ImageFormat>;
				public static isWebpFormat(param0: com.facebook.imageformat.ImageFormat): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageformat {
			export class ImageFormat extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageformat.ImageFormat>;
				public static UNKNOWN: com.facebook.imageformat.ImageFormat;
				public getName(): string;
				public getFileExtension(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
			export module ImageFormat {
				export class FormatChecker extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imageformat.ImageFormat.FormatChecker>;
					/**
					 * Constructs a new instance of the com.facebook.imageformat.ImageFormat$FormatChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHeaderSize(): number;
						determineFormat(param0: native.Array<number>, param1: number): com.facebook.imageformat.ImageFormat;
					});
					public constructor();
					public getHeaderSize(): number;
					public determineFormat(param0: native.Array<number>, param1: number): com.facebook.imageformat.ImageFormat;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageformat {
			export class ImageFormatChecker extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageformat.ImageFormatChecker>;
				public static getImageFormat_WrapIOException(param0: java.io.InputStream): com.facebook.imageformat.ImageFormat;
				public static getImageFormat(param0: java.io.InputStream): com.facebook.imageformat.ImageFormat;
				public static getInstance(): com.facebook.imageformat.ImageFormatChecker;
				public setCustomImageFormatCheckers(param0: java.util.List<com.facebook.imageformat.ImageFormat.FormatChecker>): void;
				public static getImageFormat(param0: string): com.facebook.imageformat.ImageFormat;
				public determineImageFormat(param0: java.io.InputStream): com.facebook.imageformat.ImageFormat;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageformat {
			export class ImageFormatCheckerUtils extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageformat.ImageFormatCheckerUtils>;
				public static asciiBytes(param0: string): native.Array<number>;
				public static startsWithPattern(param0: native.Array<number>, param1: native.Array<number>): boolean;
				public static indexOfPattern(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imagepipeline.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export class BuildConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.animated.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedDrawableBackend extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAnimatedImageResult(): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
							getDurationMs(): number;
							getFrameCount(): number;
							getLoopCount(): number;
							getWidth(): number;
							getHeight(): number;
							getRenderedWidth(): number;
							getRenderedHeight(): number;
							getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
							renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
							getFrameForTimestampMs(param0: number): number;
							getTimestampMsForFrame(param0: number): number;
							getDurationMsForFrame(param0: number): number;
							getFrameForPreview(): number;
							forNewBounds(param0: globalAndroid.graphics.Rect): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
							getMemoryUsage(): number;
							getPreDecodedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							hasPreDecodedFrame(param0: number): boolean;
							dropCaches(): void;
						});
						public constructor();
						public getLoopCount(): number;
						public getDurationMsForFrame(param0: number): number;
						public getFrameCount(): number;
						public getHeight(): number;
						public getMemoryUsage(): number;
						public hasPreDecodedFrame(param0: number): boolean;
						public getDurationMs(): number;
						public getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
						public getFrameForTimestampMs(param0: number): number;
						public dropCaches(): void;
						public getFrameForPreview(): number;
						public getWidth(): number;
						public forNewBounds(param0: globalAndroid.graphics.Rect): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
						public getRenderedHeight(): number;
						public getTimestampMsForFrame(param0: number): number;
						public getRenderedWidth(): number;
						public getPreDecodedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
						public getAnimatedImageResult(): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedDrawableFrameInfo extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo>;
						public frameNumber: number;
						public xOffset: number;
						public yOffset: number;
						public width: number;
						public height: number;
						public blendOperation: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation;
						public disposalMethod: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation, param6: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod);
					}
					export module AnimatedDrawableFrameInfo {
						export class BlendOperation {
							public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation>;
							public static BLEND_WITH_PREVIOUS: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation;
							public static NO_BLEND: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: string): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation;
							public static values(): native.Array<com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.BlendOperation>;
						}
						export class DisposalMethod {
							public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod>;
							public static DISPOSE_DO_NOT: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod;
							public static DISPOSE_TO_BACKGROUND: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod;
							public static DISPOSE_TO_PREVIOUS: com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: string): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod;
							public static values(): native.Array<com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo.DisposalMethod>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedDrawableOptions extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedDrawableOptions>;
						public static DEFAULTS: com.facebook.imagepipeline.animated.base.AnimatedDrawableOptions;
						public forceKeepAllFramesInMemory: boolean;
						public allowPrefetching: boolean;
						public maximumBytes: number;
						public enableDebugging: boolean;
						public constructor(param0: com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder);
						public static newBuilder(): com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedDrawableOptionsBuilder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder>;
						public build(): com.facebook.imagepipeline.animated.base.AnimatedDrawableOptions;
						public setEnableDebugging(param0: boolean): com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder;
						public constructor();
						public getAllowPrefetching(): boolean;
						public getEnableDebugging(): boolean;
						public getForceKeepAllFramesInMemory(): boolean;
						public setMaximumBytes(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder;
						public setForceKeepAllFramesInMemory(param0: boolean): com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder;
						public setAllowPrefetching(param0: boolean): com.facebook.imagepipeline.animated.base.AnimatedDrawableOptionsBuilder;
						public getMaximumBytes(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedImage extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedImage>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.base.AnimatedImage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							dispose(): void;
							getWidth(): number;
							getHeight(): number;
							getFrameCount(): number;
							getDuration(): number;
							getFrameDurations(): native.Array<number>;
							getLoopCount(): number;
							getFrame(param0: number): com.facebook.imagepipeline.animated.base.AnimatedImageFrame;
							doesRenderSupportScaling(): boolean;
							getSizeInBytes(): number;
							getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
						});
						public constructor();
						public static LOOP_COUNT_INFINITE: number;
						public getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
						public getWidth(): number;
						public getDuration(): number;
						public getFrameDurations(): native.Array<number>;
						public getLoopCount(): number;
						public getFrame(param0: number): com.facebook.imagepipeline.animated.base.AnimatedImageFrame;
						public getFrameCount(): number;
						public getHeight(): number;
						public doesRenderSupportScaling(): boolean;
						public getSizeInBytes(): number;
						public dispose(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedImageFrame extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedImageFrame>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.base.AnimatedImageFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							dispose(): void;
							renderFrame(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): void;
							getDurationMs(): number;
							getWidth(): number;
							getHeight(): number;
							getXOffset(): number;
							getYOffset(): number;
						});
						public constructor();
						public getDurationMs(): number;
						public getWidth(): number;
						public renderFrame(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): void;
						public getHeight(): number;
						public getYOffset(): number;
						public dispose(): void;
						public getXOffset(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedImageResult extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedImageResult>;
						public static newBuilder(param0: com.facebook.imagepipeline.animated.base.AnimatedImage): com.facebook.imagepipeline.animated.base.AnimatedImageResultBuilder;
						public getFrameForPreview(): number;
						public static forAnimatedImage(param0: com.facebook.imagepipeline.animated.base.AnimatedImage): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
						public getDecodedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public getImage(): com.facebook.imagepipeline.animated.base.AnimatedImage;
						public hasDecodedFrame(param0: number): boolean;
						public getPreviewBitmap(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public dispose(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export class AnimatedImageResultBuilder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.AnimatedImageResultBuilder>;
						public setDecodedFrames(param0: java.util.List<com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>>): com.facebook.imagepipeline.animated.base.AnimatedImageResultBuilder;
						public getFrameForPreview(): number;
						public setPreviewBitmap(param0: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>): com.facebook.imagepipeline.animated.base.AnimatedImageResultBuilder;
						public getImage(): com.facebook.imagepipeline.animated.base.AnimatedImage;
						public build(): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
						public getDecodedFrames(): java.util.List<com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>>;
						public getPreviewBitmap(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public setFrameForPreview(param0: number): com.facebook.imagepipeline.animated.base.AnimatedImageResultBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module base {
					export abstract class DelegatingAnimatedDrawableBackend extends java.lang.Object implements com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.base.DelegatingAnimatedDrawableBackend>;
						public getLoopCount(): number;
						public getDurationMsForFrame(param0: number): number;
						public getFrameCount(): number;
						public getHeight(): number;
						public getDelegate(): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
						public getMemoryUsage(): number;
						public hasPreDecodedFrame(param0: number): boolean;
						public getDurationMs(): number;
						public getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
						public getFrameForTimestampMs(param0: number): number;
						public dropCaches(): void;
						public getFrameForPreview(): number;
						public getWidth(): number;
						public forNewBounds(param0: globalAndroid.graphics.Rect): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
						public getRenderedHeight(): number;
						public getTimestampMsForFrame(param0: number): number;
						public constructor(param0: com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend);
						public getRenderedWidth(): number;
						public getPreDecodedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
						public getAnimatedImageResult(): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module factory {
					export class AnimatedFactory extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedFactory>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAnimatedDrawableFactory(param0: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
							getGifDecoder(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.decoder.ImageDecoder;
							getWebPDecoder(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.decoder.ImageDecoder;
						});
						public constructor();
						public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
						public getGifDecoder(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.decoder.ImageDecoder;
						public getWebPDecoder(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.decoder.ImageDecoder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module factory {
					export class AnimatedFactoryProvider extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedFactoryProvider>;
						public constructor();
						public static getAnimatedFactory(param0: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param1: com.facebook.imagepipeline.core.ExecutorSupplier, param2: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>): com.facebook.imagepipeline.animated.factory.AnimatedFactory;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module factory {
					export class AnimatedImageDecoder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedImageDecoder>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedImageDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							decode(param0: number, param1: number): com.facebook.imagepipeline.animated.base.AnimatedImage;
						});
						public constructor();
						public decode(param0: number, param1: number): com.facebook.imagepipeline.animated.base.AnimatedImage;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module factory {
					export class AnimatedImageFactory extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedImageFactory>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.factory.AnimatedImageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							decodeGif(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.image.CloseableImage;
							decodeWebP(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.image.CloseableImage;
						});
						public constructor();
						public decodeGif(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.image.CloseableImage;
						public decodeWebP(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.image.CloseableImage;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module factory {
					export class AnimatedImageFactoryImpl extends java.lang.Object implements com.facebook.imagepipeline.animated.factory.AnimatedImageFactory {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.factory.AnimatedImageFactoryImpl>;
						public decodeGif(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.image.CloseableImage;
						public constructor(param0: com.facebook.imagepipeline.animated.impl.AnimatedDrawableBackendProvider, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory);
						public decodeWebP(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.image.CloseableImage;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module impl {
					export class AnimatedDrawableBackendImpl extends java.lang.Object implements com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedDrawableBackendImpl>;
						public getLoopCount(): number;
						public getDurationMsForFrame(param0: number): number;
						public getFrameCount(): number;
						public getHeight(): number;
						public getMemoryUsage(): number;
						public hasPreDecodedFrame(param0: number): boolean;
						public constructor(param0: com.facebook.imagepipeline.animated.util.AnimatedDrawableUtil, param1: com.facebook.imagepipeline.animated.base.AnimatedImageResult, param2: globalAndroid.graphics.Rect);
						public getDurationMs(): number;
						public getFrameInfo(param0: number): com.facebook.imagepipeline.animated.base.AnimatedDrawableFrameInfo;
						public getFrameForTimestampMs(param0: number): number;
						public dropCaches(): void;
						public getFrameForPreview(): number;
						public getWidth(): number;
						public forNewBounds(param0: globalAndroid.graphics.Rect): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
						public getRenderedHeight(): number;
						public getTimestampMsForFrame(param0: number): number;
						public getRenderedWidth(): number;
						public getPreDecodedFrame(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						public renderFrame(param0: number, param1: globalAndroid.graphics.Canvas): void;
						public getAnimatedImageResult(): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module impl {
					export class AnimatedDrawableBackendProvider extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedDrawableBackendProvider>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.animated.impl.AnimatedDrawableBackendProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: com.facebook.imagepipeline.animated.base.AnimatedImageResult, param1: globalAndroid.graphics.Rect): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
						});
						public constructor();
						public get(param0: com.facebook.imagepipeline.animated.base.AnimatedImageResult, param1: globalAndroid.graphics.Rect): com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module impl {
					export class AnimatedFrameCache extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedFrameCache>;
						public cache(param0: number, param1: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
						public contains(param0: number): boolean;
						public getForReuse(): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
						public onReusabilityChange(param0: com.facebook.cache.common.CacheKey, param1: boolean): void;
						public get(param0: number): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
						public constructor(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>);
					}
					export module AnimatedFrameCache {
						export class FrameKey extends java.lang.Object implements com.facebook.cache.common.CacheKey {
							public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedFrameCache.FrameKey>;
							public getUriString(): string;
							public hashCode(): number;
							public constructor(param0: com.facebook.cache.common.CacheKey, param1: number);
							public toString(): string;
							public equals(param0: any): boolean;
							public containsUri(param0: globalAndroid.net.Uri): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module impl {
					export class AnimatedImageCompositor extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor>;
						public constructor(param0: com.facebook.imagepipeline.animated.base.AnimatedDrawableBackend, param1: com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.Callback);
						public renderFrame(param0: number, param1: globalAndroid.graphics.Bitmap): void;
					}
					export module AnimatedImageCompositor {
						export class Callback extends java.lang.Object {
							public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.Callback>;
							/**
							 * Constructs a new instance of the com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onIntermediateResult(param0: number, param1: globalAndroid.graphics.Bitmap): void;
								getCachedBitmap(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							});
							public constructor();
							public getCachedBitmap(param0: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
							public onIntermediateResult(param0: number, param1: globalAndroid.graphics.Bitmap): void;
						}
						export class FrameNeededResult {
							public static class: java.lang.Class<com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult>;
							public static REQUIRED: com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult;
							public static NOT_REQUIRED: com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult;
							public static SKIP: com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult;
							public static ABORT: com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult;
							public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
							public static valueOf(param0: string): com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult;
							public static values(): native.Array<com.facebook.imagepipeline.animated.impl.AnimatedImageCompositor.FrameNeededResult>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module animated {
				export module util {
					export class AnimatedDrawableUtil extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.animated.util.AnimatedDrawableUtil>;
						public constructor();
						public fixFrameDurations(param0: native.Array<number>): void;
						public getSizeOfBitmap(param0: globalAndroid.graphics.Bitmap): number;
						public getFrameForTimestampMs(param0: native.Array<number>, param1: number): number;
						public getTotalDurationFromFrameDurations(param0: native.Array<number>): number;
						public static isOutsideRange(param0: number, param1: number, param2: number): boolean;
						public getFrameTimeStampsFromDurations(param0: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export class ArtBitmapFactory extends com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.ArtBitmapFactory>;
					public constructor();
					public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor(param0: com.facebook.imagepipeline.memory.BitmapPool);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export class EmptyJpegGenerator extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.EmptyJpegGenerator>;
					public constructor(param0: com.facebook.common.memory.PooledByteBufferFactory);
					public generate(param0: number, param1: number): com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export class GingerbreadBitmapFactory extends com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.GingerbreadBitmapFactory>;
					public constructor();
					public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export class HoneycombBitmapCreator extends java.lang.Object implements com.facebook.common.webp.BitmapCreator {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.HoneycombBitmapCreator>;
					public createNakedBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
					public constructor(param0: com.facebook.imagepipeline.memory.PoolFactory);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export class HoneycombBitmapFactory extends com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.HoneycombBitmapFactory>;
					public constructor(param0: com.facebook.imagepipeline.bitmaps.EmptyJpegGenerator, param1: com.facebook.imagepipeline.platform.PlatformDecoder);
					public constructor();
					public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export abstract class PlatformBitmapFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory>;
					public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Bitmap.Config, param7: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmapInternal(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: number, param1: number, param2: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config, param4: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: number, param1: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config, param4: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Matrix, param6: boolean): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public addBitmapReference(param0: globalAndroid.graphics.Bitmap, param1: any): void;
					public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: number, param6: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createScaledBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean, param4: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.graphics.Bitmap): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public createBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config, param3: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.Matrix, param6: boolean, param7: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: native.Array<number>, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap.Config, param5: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.util.DisplayMetrics, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: native.Array<number>, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createBitmap(param0: globalAndroid.graphics.Bitmap, param1: any): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public createScaledBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: boolean): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public setCreationListener(param0: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory.BitmapCreationObserver): void;
				}
				export module PlatformBitmapFactory {
					export class BitmapCreationObserver extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory.BitmapCreationObserver>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory$BitmapCreationObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBitmapCreated(param0: globalAndroid.graphics.Bitmap, param1: any): void;
						});
						public constructor();
						public onBitmapCreated(param0: globalAndroid.graphics.Bitmap, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module bitmaps {
				export class SimpleBitmapReleaser extends com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<com.facebook.imagepipeline.bitmaps.SimpleBitmapReleaser>;
					public release(param0: globalAndroid.graphics.Bitmap): void;
					public release(param0: any): void;
					public static getInstance(): com.facebook.imagepipeline.bitmaps.SimpleBitmapReleaser;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class BitmapCountingMemoryCacheFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapCountingMemoryCacheFactory>;
					public constructor();
					public static get(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param1: com.facebook.common.memory.MemoryTrimmableRegistry, param2: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param3: boolean): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public static get(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param1: com.facebook.common.memory.MemoryTrimmableRegistry, param2: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param3: boolean, param4: com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class BitmapMemoryCacheFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheFactory>;
					public constructor();
					public static get(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param1: com.facebook.imagepipeline.cache.ImageCacheStatsTracker): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class BitmapMemoryCacheKey extends java.lang.Object implements com.facebook.cache.common.CacheKey {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheKey>;
					public equals(param0: any): boolean;
					public getUriString(): string;
					public toString(): string;
					public containsUri(param0: globalAndroid.net.Uri): boolean;
					public constructor(param0: string, param1: com.facebook.imagepipeline.common.ResizeOptions, param2: com.facebook.imagepipeline.common.RotationOptions, param3: com.facebook.imagepipeline.common.ImageDecodeOptions, param4: com.facebook.cache.common.CacheKey, param5: string, param6: any);
					public getPostprocessorName(): string;
					public getCallerContext(): any;
					public hashCode(): number;
					public getInBitmapCacheSince(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class BitmapMemoryCacheTrimStrategy extends java.lang.Object implements com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BitmapMemoryCacheTrimStrategy>;
					public constructor();
					public getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class BufferedDiskCache extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.BufferedDiskCache>;
					public get(param0: com.facebook.cache.common.CacheKey, param1: java.util.concurrent.atomic.AtomicBoolean): bolts.Task<com.facebook.imagepipeline.image.EncodedImage>;
					public contains(param0: com.facebook.cache.common.CacheKey): bolts.Task<java.lang.Boolean>;
					public remove(param0: com.facebook.cache.common.CacheKey): bolts.Task<java.lang.Void>;
					public containsSync(param0: com.facebook.cache.common.CacheKey): boolean;
					public put(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.imagepipeline.image.EncodedImage): void;
					public diskCheckSync(param0: com.facebook.cache.common.CacheKey): boolean;
					public clearAll(): bolts.Task<java.lang.Void>;
					public constructor(param0: com.facebook.cache.disk.FileCache, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: com.facebook.common.memory.PooledByteStreams, param3: java.util.concurrent.Executor, param4: java.util.concurrent.Executor, param5: com.facebook.imagepipeline.cache.ImageCacheStatsTracker);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class CacheKeyFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CacheKeyFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.CacheKeyFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
						getPostprocessedBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
						getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
						getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): com.facebook.cache.common.CacheKey;
					});
					public constructor();
					public getPostprocessedBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): com.facebook.cache.common.CacheKey;
					public getBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class CountingLruMap<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingLruMap<any,any>>;
					public getCount(): number;
					public contains(param0: K): boolean;
					public constructor(param0: com.facebook.imagepipeline.cache.ValueDescriptor<V>);
					public put(param0: K, param1: V): V;
					public clear(): java.util.ArrayList<V>;
					public getFirstKey(): K;
					public removeAll(param0: com.android.internal.util.Predicate<K>): java.util.ArrayList<V>;
					public getSizeInBytes(): number;
					public getMatchingEntries(param0: com.android.internal.util.Predicate<K>): java.util.ArrayList<java.util.Map.Entry<K,V>>;
					public get(param0: K): V;
					public remove(param0: K): V;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class CountingMemoryCache<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>>;
					public mMemoryCacheParams: com.facebook.imagepipeline.cache.MemoryCacheParams;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>, param2: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>): com.facebook.common.references.CloseableReference<V>;
					public contains(param0: K): boolean;
					public getCount(): number;
					public removeAll(param0: com.android.internal.util.Predicate<K>): number;
					public get(param0: K): com.facebook.common.references.CloseableReference<V>;
					public getSizeInBytes(): number;
					public getEvictionQueueCount(): number;
					public reuse(param0: K): com.facebook.common.references.CloseableReference<V>;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public clear(): void;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
					public constructor(param0: com.facebook.imagepipeline.cache.ValueDescriptor<V>, param1: com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy, param2: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param3: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param4: boolean);
					public getInUseCount(): number;
					public contains(param0: com.android.internal.util.Predicate<K>): boolean;
					public getInUseSizeInBytes(): number;
					public getEvictionQueueSizeInBytes(): number;
				}
				export module CountingMemoryCache {
					export class CacheTrimStrategy extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache$CacheTrimStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
						});
						public constructor();
						public getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
					}
					export class Entry<K, V>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache.Entry<any,any>>;
						public key: K;
						public valueRef: com.facebook.common.references.CloseableReference<V>;
						public clientCount: number;
						public isOrphan: boolean;
						public observer: com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<K>;
					}
					export class EntryStateObserver<K>  extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver<any>>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.cache.CountingMemoryCache$EntryStateObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onExclusivityChanged(param0: K, param1: boolean): void;
						});
						public constructor();
						public onExclusivityChanged(param0: K, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class DefaultBitmapMemoryCacheParamsSupplier extends com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.DefaultBitmapMemoryCacheParamsSupplier>;
					public get(): any;
					public get(): com.facebook.imagepipeline.cache.MemoryCacheParams;
					public constructor(param0: globalAndroid.app.ActivityManager);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class DefaultCacheKeyFactory extends java.lang.Object implements com.facebook.imagepipeline.cache.CacheKeyFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.DefaultCacheKeyFactory>;
					public constructor();
					public getPostprocessedBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getCacheKeySourceUri(param0: globalAndroid.net.Uri): globalAndroid.net.Uri;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public getEncodedCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: globalAndroid.net.Uri, param2: any): com.facebook.cache.common.CacheKey;
					public getBitmapCacheKey(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.cache.common.CacheKey;
					public static getInstance(): com.facebook.imagepipeline.cache.DefaultCacheKeyFactory;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class DefaultEncodedMemoryCacheParamsSupplier extends com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.DefaultEncodedMemoryCacheParamsSupplier>;
					public get(): any;
					public constructor();
					public get(): com.facebook.imagepipeline.cache.MemoryCacheParams;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class EncodedCountingMemoryCacheFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.EncodedCountingMemoryCacheFactory>;
					public constructor();
					public static get(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>, param1: com.facebook.common.memory.MemoryTrimmableRegistry, param2: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class EncodedMemoryCacheFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.EncodedMemoryCacheFactory>;
					public constructor();
					public static get(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param1: com.facebook.imagepipeline.cache.ImageCacheStatsTracker): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class ImageCacheStatsTracker extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.ImageCacheStatsTracker>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.ImageCacheStatsTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBitmapCachePut(): void;
						onBitmapCacheHit(param0: com.facebook.cache.common.CacheKey): void;
						onBitmapCacheMiss(): void;
						onMemoryCachePut(): void;
						onMemoryCacheHit(param0: com.facebook.cache.common.CacheKey): void;
						onMemoryCacheMiss(): void;
						onStagingAreaHit(param0: com.facebook.cache.common.CacheKey): void;
						onStagingAreaMiss(): void;
						onDiskCacheHit(): void;
						onDiskCacheMiss(): void;
						onDiskCacheGetFail(): void;
						registerBitmapMemoryCache(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>): void;
						registerEncodedMemoryCache(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>): void;
					});
					public constructor();
					public onStagingAreaHit(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheMiss(): void;
					public onStagingAreaMiss(): void;
					public registerBitmapMemoryCache(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>): void;
					public onBitmapCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheGetFail(): void;
					public onBitmapCachePut(): void;
					public onMemoryCachePut(): void;
					public onBitmapCacheMiss(): void;
					public onDiskCacheHit(): void;
					public registerEncodedMemoryCache(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>): void;
					public onDiskCacheMiss(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class InstrumentedMemoryCache<K, V>  extends com.facebook.imagepipeline.cache.MemoryCache<any,any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.InstrumentedMemoryCache<any,any>>;
					public constructor(param0: com.facebook.imagepipeline.cache.MemoryCache<any,any>, param1: com.facebook.imagepipeline.cache.MemoryCacheTracker<any>);
					public get(param0: any): com.facebook.common.references.CloseableReference<any>;
					public contains(param0: com.android.internal.util.Predicate<any>): boolean;
					public removeAll(param0: com.android.internal.util.Predicate<any>): number;
					public cache(param0: any, param1: com.facebook.common.references.CloseableReference<any>): com.facebook.common.references.CloseableReference<any>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class MediaVariationsIndex extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MediaVariationsIndex>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MediaVariationsIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCachedVariants(param0: string, param1: com.facebook.imagepipeline.request.MediaVariations.Builder): bolts.Task<com.facebook.imagepipeline.request.MediaVariations>;
						saveCachedVariant(param0: string, param1: com.facebook.imagepipeline.request.ImageRequest.CacheChoice, param2: com.facebook.cache.common.CacheKey, param3: com.facebook.imagepipeline.image.EncodedImage): void;
					});
					public constructor();
					public getCachedVariants(param0: string, param1: com.facebook.imagepipeline.request.MediaVariations.Builder): bolts.Task<com.facebook.imagepipeline.request.MediaVariations>;
					public saveCachedVariant(param0: string, param1: com.facebook.imagepipeline.request.ImageRequest.CacheChoice, param2: com.facebook.cache.common.CacheKey, param3: com.facebook.imagepipeline.image.EncodedImage): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class MediaVariationsIndexDatabase extends java.lang.Object implements com.facebook.imagepipeline.cache.MediaVariationsIndex {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MediaVariationsIndexDatabase>;
					public getCachedVariantsSync(param0: string, param1: com.facebook.imagepipeline.request.MediaVariations.Builder): com.facebook.imagepipeline.request.MediaVariations;
					public getCachedVariants(param0: string, param1: com.facebook.imagepipeline.request.MediaVariations.Builder): bolts.Task<com.facebook.imagepipeline.request.MediaVariations>;
					public saveCachedVariant(param0: string, param1: com.facebook.imagepipeline.request.ImageRequest.CacheChoice, param2: com.facebook.cache.common.CacheKey, param3: com.facebook.imagepipeline.image.EncodedImage): void;
					public saveCachedVariantSync(param0: string, param1: com.facebook.imagepipeline.request.ImageRequest.CacheChoice, param2: com.facebook.cache.common.CacheKey, param3: com.facebook.imagepipeline.image.EncodedImage): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.Executor, param2: java.util.concurrent.Executor, param3: com.facebook.common.time.Clock);
				}
				export module MediaVariationsIndexDatabase {
					export class IndexDbOpenHelper extends globalAndroid.database.sqlite.SQLiteOpenHelper {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.MediaVariationsIndexDatabase.IndexDbOpenHelper>;
						public static DATABASE_VERSION: number;
						public static DATABASE_NAME: string;
						public constructor(param0: globalAndroid.content.Context);
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: globalAndroid.database.DatabaseErrorHandler);
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					}
					export class IndexEntry extends java.lang.Object implements globalAndroid.provider.BaseColumns {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.MediaVariationsIndexDatabase.IndexEntry>;
						public static TABLE_NAME: string;
						public static COLUMN_NAME_MEDIA_ID: string;
						public static COLUMN_NAME_WIDTH: string;
						public static COLUMN_NAME_HEIGHT: string;
						public static COLUMN_NAME_CACHE_CHOICE: string;
						public static COLUMN_NAME_CACHE_KEY: string;
						public static COLUMN_NAME_RESOURCE_ID: string;
						public static COLUMN_NAME_DATE: string;
					}
					export class LazyIndexDbOpenHelper extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.cache.MediaVariationsIndexDatabase.LazyIndexDbOpenHelper>;
						public getWritableDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class MemoryCache<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCache<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCache<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
						get(param0: K): com.facebook.common.references.CloseableReference<V>;
						removeAll(param0: com.android.internal.util.Predicate<K>): number;
						contains(param0: com.android.internal.util.Predicate<K>): boolean;
					});
					public constructor();
					public removeAll(param0: com.android.internal.util.Predicate<K>): number;
					public cache(param0: K, param1: com.facebook.common.references.CloseableReference<V>): com.facebook.common.references.CloseableReference<V>;
					public get(param0: K): com.facebook.common.references.CloseableReference<V>;
					public contains(param0: com.android.internal.util.Predicate<K>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class MemoryCacheParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public maxCacheSize: number;
					public maxCacheEntries: number;
					public maxEvictionQueueSize: number;
					public maxEvictionQueueEntries: number;
					public maxCacheEntrySize: number;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class MemoryCacheTracker<K>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.MemoryCacheTracker<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.MemoryCacheTracker<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCacheHit(param0: K): void;
						onCacheMiss(): void;
						onCachePut(): void;
					});
					public constructor();
					public onCacheHit(param0: K): void;
					public onCacheMiss(): void;
					public onCachePut(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class NativeMemoryCacheTrimStrategy extends java.lang.Object implements com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.NativeMemoryCacheTrimStrategy>;
					public constructor();
					public getTrimRatio(param0: com.facebook.common.memory.MemoryTrimType): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class NoOpImageCacheStatsTracker extends java.lang.Object implements com.facebook.imagepipeline.cache.ImageCacheStatsTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.NoOpImageCacheStatsTracker>;
					public onStagingAreaHit(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheMiss(): void;
					public static getInstance(): com.facebook.imagepipeline.cache.NoOpImageCacheStatsTracker;
					public onStagingAreaMiss(): void;
					public registerBitmapMemoryCache(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>): void;
					public onBitmapCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onMemoryCacheHit(param0: com.facebook.cache.common.CacheKey): void;
					public onDiskCacheGetFail(): void;
					public onBitmapCachePut(): void;
					public onMemoryCachePut(): void;
					public onBitmapCacheMiss(): void;
					public onDiskCacheHit(): void;
					public registerEncodedMemoryCache(param0: com.facebook.imagepipeline.cache.CountingMemoryCache<any,any>): void;
					public onDiskCacheMiss(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class NoOpMediaVariationsIndex extends java.lang.Object implements com.facebook.imagepipeline.cache.MediaVariationsIndex {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.NoOpMediaVariationsIndex>;
					public constructor();
					public getCachedVariants(param0: string, param1: com.facebook.imagepipeline.request.MediaVariations.Builder): bolts.Task<com.facebook.imagepipeline.request.MediaVariations>;
					public saveCachedVariant(param0: string, param1: com.facebook.imagepipeline.request.ImageRequest.CacheChoice, param2: com.facebook.cache.common.CacheKey, param3: com.facebook.imagepipeline.image.EncodedImage): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class StagingArea extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.StagingArea>;
					public static getInstance(): com.facebook.imagepipeline.cache.StagingArea;
					public remove(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public remove(param0: com.facebook.cache.common.CacheKey): boolean;
					public put(param0: com.facebook.cache.common.CacheKey, param1: com.facebook.imagepipeline.image.EncodedImage): void;
					public get(param0: com.facebook.cache.common.CacheKey): com.facebook.imagepipeline.image.EncodedImage;
					public clearAll(): void;
					public containsKey(param0: com.facebook.cache.common.CacheKey): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module cache {
				export class ValueDescriptor<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.cache.ValueDescriptor<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.cache.ValueDescriptor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSizeInBytes(param0: V): number;
					});
					public constructor();
					public getSizeInBytes(param0: V): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class BytesRange extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.BytesRange>;
					public static TO_END_OF_CONTENT: number;
					public to: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public static toMax(param0: number): com.facebook.imagepipeline.common.BytesRange;
					public toHttpRangeHeaderValue(): string;
					public contains(param0: com.facebook.imagepipeline.common.BytesRange): boolean;
					public hashCode(): number;
					public static fromContentRangeHeader(param0: string): com.facebook.imagepipeline.common.BytesRange;
					public constructor(param0: number, param1: number);
					public static from(param0: number): com.facebook.imagepipeline.common.BytesRange;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class ImageDecodeOptions extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.ImageDecodeOptions>;
					public minDecodeIntervalMs: number;
					public decodePreviewFrame: boolean;
					public useLastFrameForPreview: boolean;
					public decodeAllFrames: boolean;
					public forceStaticImage: boolean;
					public bitmapConfig: globalAndroid.graphics.Bitmap.Config;
					public customImageDecoder: com.facebook.imagepipeline.decoder.ImageDecoder;
					public equals(param0: any): boolean;
					public static defaults(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public toString(): string;
					public static newBuilder(): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public hashCode(): number;
					public constructor(param0: com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class ImageDecodeOptionsBuilder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder>;
					public setCustomImageDecoder(param0: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public getDecodePreviewFrame(): boolean;
					public build(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public setBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public getCustomImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public setFrom(param0: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public setMinDecodeIntervalMs(param0: number): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public setForceStaticImage(param0: boolean): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					public getUseLastFrameForPreview(): boolean;
					public getMinDecodeIntervalMs(): number;
					public getForceStaticImage(): boolean;
					public constructor();
					public setUseLastFrameForPreview(param0: boolean): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public getDecodeAllFrames(): boolean;
					public setDecodePreviewFrame(param0: boolean): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
					public setDecodeAllFrames(param0: boolean): com.facebook.imagepipeline.common.ImageDecodeOptionsBuilder;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class Priority {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.Priority>;
					public static LOW: com.facebook.imagepipeline.common.Priority;
					public static MEDIUM: com.facebook.imagepipeline.common.Priority;
					public static HIGH: com.facebook.imagepipeline.common.Priority;
					public static values(): native.Array<com.facebook.imagepipeline.common.Priority>;
					public static getHigherPriority(param0: com.facebook.imagepipeline.common.Priority, param1: com.facebook.imagepipeline.common.Priority): com.facebook.imagepipeline.common.Priority;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
					public static valueOf(param0: string): com.facebook.imagepipeline.common.Priority;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class ResizeOptions extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.ResizeOptions>;
					public static DEFAULT_ROUNDUP_FRACTION: number;
					public width: number;
					public height: number;
					public maxBitmapSize: number;
					public roundUpFraction: number;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public equals(param0: any): boolean;
					public static forSquareSize(param0: number): com.facebook.imagepipeline.common.ResizeOptions;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: number);
					public static forDimensions(param0: number, param1: number): com.facebook.imagepipeline.common.ResizeOptions;
					public hashCode(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class RotationOptions extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.RotationOptions>;
					public static NO_ROTATION: number;
					public static ROTATE_90: number;
					public static ROTATE_180: number;
					public static ROTATE_270: number;
					public getForcedAngle(): number;
					public equals(param0: any): boolean;
					public static disableRotation(): com.facebook.imagepipeline.common.RotationOptions;
					public toString(): string;
					public canDeferUntilRendered(): boolean;
					public useImageMetadata(): boolean;
					public static forceRotation(param0: number): com.facebook.imagepipeline.common.RotationOptions;
					public rotationEnabled(): boolean;
					public hashCode(): number;
					public static autoRotate(): com.facebook.imagepipeline.common.RotationOptions;
					public static autoRotateAtRenderTime(): com.facebook.imagepipeline.common.RotationOptions;
				}
				export module RotationOptions {
					export class RotationAngle extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.facebook.imagepipeline.common.RotationOptions.RotationAngle>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.common.RotationOptions$RotationAngle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							annotationType(): java.lang.Class<any>;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class SourceUriType extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.SourceUriType>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.common.SourceUriType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						annotationType(): java.lang.Class<any>;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
					});
					public constructor();
					public static SOURCE_TYPE_NETWORK: number;
					public static SOURCE_TYPE_LOCAL_ASSET: number;
					public static SOURCE_TYPE_LOCAL_RESOURCE: number;
					public static SOURCE_TYPE_QUALIFIED_RESOURCE: number;
					public static SOURCE_TYPE_LOCAL_FILE: number;
					public static SOURCE_TYPE_UNKNOWN: number;
					public static SOURCE_TYPE_LOCAL_IMAGE_FILE: number;
					public static SOURCE_TYPE_DATA: number;
					public static SOURCE_TYPE_LOCAL_VIDEO_FILE: number;
					public static SOURCE_TYPE_LOCAL_CONTENT: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module common {
				export class TooManyBitmapsException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.facebook.imagepipeline.common.TooManyBitmapsException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class DefaultExecutorSupplier extends java.lang.Object implements com.facebook.imagepipeline.core.ExecutorSupplier {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DefaultExecutorSupplier>;
					public forLocalStorageRead(): java.util.concurrent.Executor;
					public forLightweightBackgroundTasks(): java.util.concurrent.Executor;
					public forDecode(): java.util.concurrent.Executor;
					public forLocalStorageWrite(): java.util.concurrent.Executor;
					public constructor(param0: number);
					public forBackgroundTasks(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class DiskStorageCacheFactory extends java.lang.Object implements com.facebook.imagepipeline.core.FileCacheFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DiskStorageCacheFactory>;
					public static buildDiskStorageCache(param0: com.facebook.cache.disk.DiskCacheConfig, param1: com.facebook.cache.disk.DiskStorage): com.facebook.cache.disk.DiskStorageCache;
					public static buildDiskStorageCache(param0: com.facebook.cache.disk.DiskCacheConfig, param1: com.facebook.cache.disk.DiskStorage, param2: java.util.concurrent.Executor): com.facebook.cache.disk.DiskStorageCache;
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
					public constructor(param0: com.facebook.imagepipeline.core.DiskStorageFactory);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class DiskStorageFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DiskStorageFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.DiskStorageFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
					});
					public constructor();
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class DynamicDefaultDiskStorageFactory extends java.lang.Object implements com.facebook.imagepipeline.core.DiskStorageFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.DynamicDefaultDiskStorageFactory>;
					public constructor();
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.DiskStorage;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ExecutorSupplier extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ExecutorSupplier>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.ExecutorSupplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						forLocalStorageRead(): java.util.concurrent.Executor;
						forLocalStorageWrite(): java.util.concurrent.Executor;
						forDecode(): java.util.concurrent.Executor;
						forBackgroundTasks(): java.util.concurrent.Executor;
						forLightweightBackgroundTasks(): java.util.concurrent.Executor;
					});
					public constructor();
					public forLocalStorageRead(): java.util.concurrent.Executor;
					public forLightweightBackgroundTasks(): java.util.concurrent.Executor;
					public forDecode(): java.util.concurrent.Executor;
					public forLocalStorageWrite(): java.util.concurrent.Executor;
					public forBackgroundTasks(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class FileCacheFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.FileCacheFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.core.FileCacheFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
					});
					public constructor();
					public get(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.cache.disk.FileCache;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ImagePipeline extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipeline>;
					public isInDiskCache(param0: globalAndroid.net.Uri): com.facebook.datasource.DataSource<java.lang.Boolean>;
					public fetchDecodedImage(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public evictFromDiskCache(param0: com.facebook.imagepipeline.request.ImageRequest): void;
					public isInBitmapMemoryCache(param0: com.facebook.imagepipeline.request.ImageRequest): boolean;
					public evictFromMemoryCache(param0: globalAndroid.net.Uri): void;
					public isPaused(): boolean;
					public getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
					public fetchImageFromBitmapCache(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public prefetchToDiskCache(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.datasource.DataSource<java.lang.Void>;
					public pause(): void;
					public clearDiskCaches(): void;
					public prefetchToDiskCache(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: com.facebook.imagepipeline.common.Priority): com.facebook.datasource.DataSource<java.lang.Void>;
					public isInDiskCacheSync(param0: com.facebook.imagepipeline.request.ImageRequest): boolean;
					public fetchDecodedImage(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public isInDiskCacheSync(param0: globalAndroid.net.Uri, param1: com.facebook.imagepipeline.request.ImageRequest.CacheChoice): boolean;
					public isInDiskCache(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.datasource.DataSource<java.lang.Boolean>;
					public evictFromDiskCache(param0: globalAndroid.net.Uri): void;
					public getEncodedImageDataSourceSupplier(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>>;
					public isInDiskCacheSync(param0: globalAndroid.net.Uri): boolean;
					public clearMemoryCaches(): void;
					public prefetchToBitmapCache(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.datasource.DataSource<java.lang.Void>;
					public fetchEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any): com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getBitmapMemoryCache(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public resume(): void;
					public isInBitmapMemoryCache(param0: globalAndroid.net.Uri): boolean;
					public constructor(param0: com.facebook.imagepipeline.core.ProducerSequenceFactory, param1: java.util.Set<com.facebook.imagepipeline.listener.RequestListener>, param2: com.facebook.common.internal.Supplier<java.lang.Boolean>, param3: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param4: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param5: com.facebook.imagepipeline.cache.BufferedDiskCache, param6: com.facebook.imagepipeline.cache.BufferedDiskCache, param7: com.facebook.imagepipeline.cache.CacheKeyFactory, param8: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue, param9: com.facebook.common.internal.Supplier<java.lang.Boolean>);
					public getDataSourceSupplier(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.common.internal.Supplier<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>;
					public evictFromCache(param0: globalAndroid.net.Uri): void;
					public clearCaches(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ImagePipelineConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig>;
					public getImageDecoder(): com.facebook.imagepipeline.decoder.ImageDecoder;
					public getPoolFactory(): com.facebook.imagepipeline.memory.PoolFactory;
					public getExecutorSupplier(): com.facebook.imagepipeline.core.ExecutorSupplier;
					public isResizeAndRotateEnabledForNetwork(): boolean;
					public getCacheKeyFactory(): com.facebook.imagepipeline.cache.CacheKeyFactory;
					public getEncodedMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public getRequestListeners(): java.util.Set<com.facebook.imagepipeline.listener.RequestListener>;
					public getFileCacheFactory(): com.facebook.imagepipeline.core.FileCacheFactory;
					public isDownsampleEnabled(): boolean;
					public getImageDecoderConfig(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
					public getProgressiveJpegConfig(): com.facebook.imagepipeline.decoder.ProgressiveJpegConfig;
					public getContext(): globalAndroid.content.Context;
					public static getDefaultImageRequestConfig(): com.facebook.imagepipeline.core.ImagePipelineConfig.DefaultImageRequestConfig;
					public getImageCacheStatsTracker(): com.facebook.imagepipeline.cache.ImageCacheStatsTracker;
					public getMainDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
					public getBitmapMemoryCacheTrimStrategy(): com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy;
					public getExperiments(): com.facebook.imagepipeline.core.ImagePipelineExperiments;
					public getBitmapMemoryCacheParamsSupplier(): com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>;
					public getNetworkFetcher(): com.facebook.imagepipeline.producers.NetworkFetcher<any>;
					public getBitmapConfig(): globalAndroid.graphics.Bitmap.Config;
					public static newBuilder(param0: globalAndroid.content.Context): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
					public getIsPrefetchEnabledSupplier(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
					public getSmallImageDiskCacheConfig(): com.facebook.cache.disk.DiskCacheConfig;
					public getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
				}
				export module ImagePipelineConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig.Builder>;
						public setBitmapMemoryCacheTrimStrategy(param0: com.facebook.imagepipeline.cache.CountingMemoryCache.CacheTrimStrategy): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setHttpConnectionTimeout(param0: number): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setNetworkFetcher(param0: com.facebook.imagepipeline.producers.NetworkFetcher<any>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setPoolFactory(param0: com.facebook.imagepipeline.memory.PoolFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageDecoderConfig(param0: com.facebook.imagepipeline.decoder.ImageDecoderConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setDownsampleEnabled(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setMemoryTrimmableRegistry(param0: com.facebook.common.memory.MemoryTrimmableRegistry): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setExecutorSupplier(param0: com.facebook.imagepipeline.core.ExecutorSupplier): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setEncodedMemoryCacheParamsSupplier(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setRequestListeners(param0: java.util.Set<com.facebook.imagepipeline.listener.RequestListener>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageDecoder(param0: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setMainDiskCacheConfig(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setBitmapMemoryCacheParamsSupplier(param0: com.facebook.common.internal.Supplier<com.facebook.imagepipeline.cache.MemoryCacheParams>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setBitmapsConfig(param0: globalAndroid.graphics.Bitmap.Config): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setCacheKeyFactory(param0: com.facebook.imagepipeline.cache.CacheKeyFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setImageCacheStatsTracker(param0: com.facebook.imagepipeline.cache.ImageCacheStatsTracker): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setSmallImageDiskCacheConfig(param0: com.facebook.cache.disk.DiskCacheConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public experiment(): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
						public setProgressiveJpegConfig(param0: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setResizeAndRotateEnabledForNetwork(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setIsPrefetchEnabledSupplier(param0: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setPlatformBitmapFactory(param0: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setFileCacheFactory(param0: com.facebook.imagepipeline.core.FileCacheFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public isDownsampleEnabled(): boolean;
						public build(): com.facebook.imagepipeline.core.ImagePipelineConfig;
					}
					export class DefaultImageRequestConfig extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineConfig.DefaultImageRequestConfig>;
						public setProgressiveRenderingEnabled(param0: boolean): void;
						public isProgressiveRenderingEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ImagePipelineExperiments extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments>;
					public getWebpErrorLogger(): com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger;
					public getMediaVariationsIndexEnabled(): boolean;
					public isSmartResizingEnabled(): com.facebook.common.internal.Supplier<java.lang.Boolean>;
					public getUseDownsamplingRatioForResizing(): boolean;
					public getBitmapPrepareToDrawMinSizeBytes(): number;
					public isExternalCreatedBitmapLogEnabled(): boolean;
					public isPartialImageCachingEnabled(): boolean;
					public isWebpSupportEnabled(): boolean;
					public getProducerFactoryMethod(): com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod;
					public getBitmapPrepareToDrawForPrefetch(): boolean;
					public static newBuilder(param0: com.facebook.imagepipeline.core.ImagePipelineConfig.Builder): com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder;
					public isDecodeCancellationEnabled(): boolean;
					public getBitmapPrepareToDrawMaxSizeBytes(): number;
					public getWebpBitmapFactory(): com.facebook.common.webp.WebpBitmapFactory;
					public getUseBitmapPrepareToDraw(): boolean;
				}
				export module ImagePipelineExperiments {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.Builder>;
						public mBitmapPrepareToDrawForPrefetch: boolean;
						public constructor(param0: com.facebook.imagepipeline.core.ImagePipelineConfig.Builder);
						public setProducerFactoryMethod(param0: com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setSuppressBitmapPrefetching(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setBitmapPrepareToDraw(param0: boolean, param1: number, param2: number, param3: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setExternalCreatedBitmapLogEnabled(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setMediaVariationsIndexEnabled(param0: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setDecodeCancellationEnabled(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setWebpSupportEnabled(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setWebpBitmapFactory(param0: com.facebook.common.webp.WebpBitmapFactory): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public build(): com.facebook.imagepipeline.core.ImagePipelineExperiments;
						public setPartialImageCachingEnabled(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setWebpErrorLogger(param0: com.facebook.common.webp.WebpBitmapFactory.WebpErrorLogger): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setSmartResizingEnabled(param0: com.facebook.common.internal.Supplier<java.lang.Boolean>): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public setUseDownsampligRatioForResizing(param0: boolean): com.facebook.imagepipeline.core.ImagePipelineConfig.Builder;
						public isPartialImageCachingEnabled(): boolean;
					}
					export class DefaultProducerFactoryMethod extends java.lang.Object implements com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.DefaultProducerFactoryMethod>;
						public constructor();
						public createProducerFactory(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: com.facebook.common.internal.Supplier<java.lang.Boolean>, param8: com.facebook.imagepipeline.core.ExecutorSupplier, param9: com.facebook.common.memory.PooledByteBufferFactory, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.imagepipeline.cache.BufferedDiskCache, param13: com.facebook.imagepipeline.cache.BufferedDiskCache, param14: com.facebook.imagepipeline.cache.MediaVariationsIndex, param15: com.facebook.imagepipeline.cache.CacheKeyFactory, param16: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param17: number, param18: number, param19: boolean): com.facebook.imagepipeline.core.ProducerFactory;
					}
					export class ProducerFactoryMethod extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineExperiments.ProducerFactoryMethod>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.core.ImagePipelineExperiments$ProducerFactoryMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							createProducerFactory(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: com.facebook.common.internal.Supplier<java.lang.Boolean>, param8: com.facebook.imagepipeline.core.ExecutorSupplier, param9: com.facebook.common.memory.PooledByteBufferFactory, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.imagepipeline.cache.BufferedDiskCache, param13: com.facebook.imagepipeline.cache.BufferedDiskCache, param14: com.facebook.imagepipeline.cache.MediaVariationsIndex, param15: com.facebook.imagepipeline.cache.CacheKeyFactory, param16: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param17: number, param18: number, param19: boolean): com.facebook.imagepipeline.core.ProducerFactory;
						});
						public constructor();
						public createProducerFactory(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: com.facebook.common.internal.Supplier<java.lang.Boolean>, param8: com.facebook.imagepipeline.core.ExecutorSupplier, param9: com.facebook.common.memory.PooledByteBufferFactory, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.imagepipeline.cache.BufferedDiskCache, param13: com.facebook.imagepipeline.cache.BufferedDiskCache, param14: com.facebook.imagepipeline.cache.MediaVariationsIndex, param15: com.facebook.imagepipeline.cache.CacheKeyFactory, param16: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param17: number, param18: number, param19: boolean): com.facebook.imagepipeline.core.ProducerFactory;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ImagePipelineFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ImagePipelineFactory>;
					public static shutDown(): void;
					public static initialize(param0: globalAndroid.content.Context): void;
					public static initialize(param0: com.facebook.imagepipeline.core.ImagePipelineConfig): void;
					public getEncodedCountingMemoryCache(): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public static buildPlatformDecoder(param0: com.facebook.imagepipeline.memory.PoolFactory, param1: boolean): com.facebook.imagepipeline.platform.PlatformDecoder;
					public static getInstance(): com.facebook.imagepipeline.core.ImagePipelineFactory;
					public getAnimatedDrawableFactory(param0: globalAndroid.content.Context): com.facebook.imagepipeline.drawable.DrawableFactory;
					public getMainFileCache(): com.facebook.cache.disk.FileCache;
					public getSmallImageFileCache(): com.facebook.cache.disk.FileCache;
					public getImagePipeline(): com.facebook.imagepipeline.core.ImagePipeline;
					public getMainBufferedDiskCache(): com.facebook.imagepipeline.cache.BufferedDiskCache;
					public constructor(param0: com.facebook.imagepipeline.core.ImagePipelineConfig);
					public getEncodedMemoryCache(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>;
					public getBitmapMemoryCache(): com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public getPlatformDecoder(): com.facebook.imagepipeline.platform.PlatformDecoder;
					public getMediaVariationsIndex(): com.facebook.imagepipeline.cache.MediaVariationsIndex;
					public getBitmapCountingMemoryCache(): com.facebook.imagepipeline.cache.CountingMemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>;
					public static buildPlatformBitmapFactory(param0: com.facebook.imagepipeline.memory.PoolFactory, param1: com.facebook.imagepipeline.platform.PlatformDecoder): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
					public getPlatformBitmapFactory(): com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class PriorityThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.PriorityThreadFactory>;
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
					public constructor(param0: number);
					public constructor(param0: number, param1: string, param2: boolean);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ProducerFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ProducerFactory>;
					public newBitmapPrepareProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapPrepareProducer;
					public newDiskCacheWriteProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.DiskCacheWriteProducer;
					public newNetworkFetchProducer(param0: com.facebook.imagepipeline.producers.NetworkFetcher<any>): com.facebook.imagepipeline.producers.NetworkFetchProducer;
					public static newSwallowResultProducer(param0: com.facebook.imagepipeline.producers.Producer<any>): com.facebook.imagepipeline.producers.SwallowResultProducer<any>;
					public newEncodedCacheKeyMultiplexProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.EncodedCacheKeyMultiplexProducer;
					public newLocalVideoThumbnailProducer(): com.facebook.imagepipeline.producers.LocalVideoThumbnailProducer;
					public newBitmapMemoryCacheKeyMultiplexProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapMemoryCacheKeyMultiplexProducer;
					public newThumbnailBranchProducer(param0: native.Array<com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage>>): com.facebook.imagepipeline.producers.ThumbnailBranchProducer;
					public newDecodeProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.DecodeProducer;
					public newWebpTranscodeProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.WebpTranscodeProducer;
					public newLocalResourceFetchProducer(): com.facebook.imagepipeline.producers.LocalResourceFetchProducer;
					public newThrottlingProducer(param0: com.facebook.imagepipeline.producers.Producer<any>): com.facebook.imagepipeline.producers.ThrottlingProducer<any>;
					public newPostprocessorProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.PostprocessorProducer;
					public static newBranchOnSeparateImagesProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.BranchOnSeparateImagesProducer;
					public newResizeAndRotateProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, param1: boolean, param2: boolean): com.facebook.imagepipeline.producers.ResizeAndRotateProducer;
					public static newAddImageTransformMetaDataProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.AddImageTransformMetaDataProducer;
					public newLocalContentUriFetchProducer(): com.facebook.imagepipeline.producers.LocalContentUriFetchProducer;
					public constructor(param0: globalAndroid.content.Context, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: com.facebook.common.internal.Supplier<java.lang.Boolean>, param8: com.facebook.imagepipeline.core.ExecutorSupplier, param9: com.facebook.common.memory.PooledByteBufferFactory, param10: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param11: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param12: com.facebook.imagepipeline.cache.BufferedDiskCache, param13: com.facebook.imagepipeline.cache.BufferedDiskCache, param14: com.facebook.imagepipeline.cache.MediaVariationsIndex, param15: com.facebook.imagepipeline.cache.CacheKeyFactory, param16: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param17: number, param18: number, param19: boolean);
					public newLocalFileFetchProducer(): com.facebook.imagepipeline.producers.LocalFileFetchProducer;
					public newQualifiedResourceFetchProducer(): com.facebook.imagepipeline.producers.QualifiedResourceFetchProducer;
					public newBackgroundThreadHandoffProducer(param0: com.facebook.imagepipeline.producers.Producer<any>, param1: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue): com.facebook.imagepipeline.producers.ThreadHandoffProducer<any>;
					public newBitmapMemoryCacheGetProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapMemoryCacheGetProducer;
					public newDiskCacheReadProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.DiskCacheReadProducer;
					public newPostprocessorBitmapMemoryCacheProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.PostprocessedBitmapMemoryCacheProducer;
					public newPartialDiskCacheProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.PartialDiskCacheProducer;
					public newLocalContentUriThumbnailFetchProducer(): com.facebook.imagepipeline.producers.LocalContentUriThumbnailFetchProducer;
					public newMediaVariationsProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.MediaVariationsFallbackProducer;
					public newBitmapMemoryCacheProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): com.facebook.imagepipeline.producers.BitmapMemoryCacheProducer;
					public newDataFetchProducer(): com.facebook.imagepipeline.producers.DataFetchProducer;
					public newLocalExifThumbnailProducer(): com.facebook.imagepipeline.producers.LocalExifThumbnailProducer;
					public newEncodedMemoryCacheProducer(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>): com.facebook.imagepipeline.producers.EncodedMemoryCacheProducer;
					public static newNullProducer(): com.facebook.imagepipeline.producers.NullProducer<any>;
					public newLocalAssetFetchProducer(): com.facebook.imagepipeline.producers.LocalAssetFetchProducer;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module core {
				export class ProducerSequenceFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.core.ProducerSequenceFactory>;
					public getDecodedImagePrefetchProducerSequence(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<java.lang.Void>;
					public constructor(param0: globalAndroid.content.ContentResolver, param1: com.facebook.imagepipeline.core.ProducerFactory, param2: com.facebook.imagepipeline.producers.NetworkFetcher<any>, param3: boolean, param4: boolean, param5: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue, param6: boolean, param7: boolean, param8: boolean);
					public getLocalFileFetchEncodedImageProducerSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getDecodedImageProducerSequence(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public getNetworkFetchEncodedImageProducerSequence(): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getEncodedImageProducerSequence(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>;
					public getEncodedImagePrefetchProducerSequence(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.producers.Producer<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export abstract class AbstractProducerToDataSourceAdapter<T>  extends com.facebook.datasource.AbstractDataSource<any> implements com.facebook.imagepipeline.request.HasImageRequest  {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter<any>>;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<any>, param1: com.facebook.imagepipeline.producers.SettableProducerContext, param2: com.facebook.imagepipeline.listener.RequestListener);
					public isFinished(): boolean;
					public close(): boolean;
					public hasFailed(): boolean;
					public getProgress(): number;
					public constructor();
					public hasResult(): boolean;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public onNewResultImpl(param0: any, param1: number): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export abstract class BaseBitmapDataSubscriber extends com.facebook.datasource.BaseDataSubscriber<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber>;
					public constructor();
					public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
					public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					public onNewResultImpl(param0: globalAndroid.graphics.Bitmap): void;
					public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
					public onNewResultImpl(param0: com.facebook.datasource.DataSource<any>): void;
					public onNewResultImpl(param0: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>): void;
					public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export abstract class BaseListBitmapDataSubscriber extends com.facebook.datasource.BaseDataSubscriber<java.util.List<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.BaseListBitmapDataSubscriber>;
					public constructor();
					public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
					public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					public onNewResultListImpl(param0: java.util.List<globalAndroid.graphics.Bitmap>): void;
					public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
					public onNewResultImpl(param0: com.facebook.datasource.DataSource<java.util.List<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>>): void;
					public onNewResultImpl(param0: com.facebook.datasource.DataSource<any>): void;
					public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export class CloseableProducerToDataSourceAdapter<T>  extends com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter<com.facebook.common.references.CloseableReference<any>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.CloseableProducerToDataSourceAdapter<any>>;
					public isFinished(): boolean;
					public close(): boolean;
					public hasFailed(): boolean;
					public getResult(): com.facebook.common.references.CloseableReference<any>;
					public closeResult(param0: any): void;
					public getProgress(): number;
					public closeResult(param0: com.facebook.common.references.CloseableReference<any>): void;
					public static create(param0: com.facebook.imagepipeline.producers.Producer<any>, param1: com.facebook.imagepipeline.producers.SettableProducerContext, param2: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<any>;
					public hasResult(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public onNewResultImpl(param0: any, param1: number): void;
					public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<any>, param1: number): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export class ListDataSource<T>  extends com.facebook.datasource.AbstractDataSource<java.util.List<com.facebook.common.references.CloseableReference<any>>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ListDataSource<any>>;
					public isFinished(): boolean;
					public static create(param0: native.Array<com.facebook.datasource.DataSource<any>>): com.facebook.imagepipeline.datasource.ListDataSource<any>;
					public getResult(): java.util.List<com.facebook.common.references.CloseableReference<any>>;
					public close(): boolean;
					public hasFailed(): boolean;
					public getProgress(): number;
					public constructor();
					public hasResult(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public constructor(param0: native.Array<com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>>);
					public isClosed(): boolean;
				}
				export module ListDataSource {
					export class InternalDataSubscriber extends com.facebook.datasource.DataSubscriber<com.facebook.common.references.CloseableReference<any>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ListDataSource.InternalDataSubscriber>;
						public onFailure(param0: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onNewResult(param0: com.facebook.datasource.DataSource<any>): void;
						public onCancellation(param0: com.facebook.datasource.DataSource<any>): void;
						public onFailure(param0: com.facebook.datasource.DataSource<any>): void;
						public onNewResult(param0: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<com.facebook.common.references.CloseableReference<any>>): void;
						public onProgressUpdate(param0: com.facebook.datasource.DataSource<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export class ProducerToDataSourceAdapter<T>  extends com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.ProducerToDataSourceAdapter<any>>;
					public isFinished(): boolean;
					public getProgress(): number;
					public static create(param0: com.facebook.imagepipeline.producers.Producer<any>, param1: com.facebook.imagepipeline.producers.SettableProducerContext, param2: com.facebook.imagepipeline.listener.RequestListener): com.facebook.datasource.DataSource<any>;
					public hasResult(): boolean;
					public close(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public getFailureCause(): java.lang.Throwable;
					public getResult(): any;
					public hasFailed(): boolean;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module datasource {
				export class SettableDataSource<T>  extends com.facebook.datasource.AbstractDataSource<com.facebook.common.references.CloseableReference<any>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.datasource.SettableDataSource<any>>;
					public isFinished(): boolean;
					public close(): boolean;
					public setProgress(param0: number): boolean;
					public hasFailed(): boolean;
					public getResult(): com.facebook.common.references.CloseableReference<any>;
					public closeResult(param0: any): void;
					public getProgress(): number;
					public closeResult(param0: com.facebook.common.references.CloseableReference<any>): void;
					public hasResult(): boolean;
					public subscribe(param0: com.facebook.datasource.DataSubscriber<any>, param1: java.util.concurrent.Executor): void;
					public setException(param0: java.lang.Throwable): boolean;
					public getFailureCause(): java.lang.Throwable;
					public set(param0: com.facebook.common.references.CloseableReference<any>): boolean;
					public getResult(): any;
					public static create(): com.facebook.imagepipeline.datasource.SettableDataSource<any>;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class DecodeException extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.DecodeException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public constructor(param0: string, param1: com.facebook.imagepipeline.image.EncodedImage);
					public getEncodedImage(): com.facebook.imagepipeline.image.EncodedImage;
					public constructor(param0: string, param1: java.lang.Throwable, param2: com.facebook.imagepipeline.image.EncodedImage);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class DefaultImageDecoder extends java.lang.Object implements com.facebook.imagepipeline.decoder.ImageDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.DefaultImageDecoder>;
					public constructor(param0: com.facebook.imagepipeline.decoder.ImageDecoder, param1: com.facebook.imagepipeline.decoder.ImageDecoder, param2: com.facebook.imagepipeline.platform.PlatformDecoder, param3: java.util.Map<com.facebook.imageformat.ImageFormat,com.facebook.imagepipeline.decoder.ImageDecoder>);
					public decodeGif(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decodeStaticImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public decodeJpeg(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableStaticBitmap;
					public constructor(param0: com.facebook.imagepipeline.decoder.ImageDecoder, param1: com.facebook.imagepipeline.decoder.ImageDecoder, param2: com.facebook.imagepipeline.platform.PlatformDecoder);
					public decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					public decodeAnimatedWebp(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class ImageDecoder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ImageDecoder>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.decoder.ImageDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
					});
					public constructor();
					public decode(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number, param2: com.facebook.imagepipeline.image.QualityInfo, param3: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.image.CloseableImage;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class ImageDecoderConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ImageDecoderConfig>;
					public static newBuilder(): com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder;
					public getCustomImageDecoders(): java.util.Map<com.facebook.imageformat.ImageFormat,com.facebook.imagepipeline.decoder.ImageDecoder>;
					public getCustomImageFormats(): java.util.List<com.facebook.imageformat.ImageFormat.FormatChecker>;
				}
				export module ImageDecoderConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder>;
						public constructor();
						public build(): com.facebook.imagepipeline.decoder.ImageDecoderConfig;
						public addDecodingCapability(param0: com.facebook.imageformat.ImageFormat, param1: com.facebook.imageformat.ImageFormat.FormatChecker, param2: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder;
						public overrideDecoder(param0: com.facebook.imageformat.ImageFormat, param1: com.facebook.imagepipeline.decoder.ImageDecoder): com.facebook.imagepipeline.decoder.ImageDecoderConfig.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class ProgressiveJpegConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ProgressiveJpegConfig>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.decoder.ProgressiveJpegConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getNextScanNumberToDecode(param0: number): number;
						getQualityInfo(param0: number): com.facebook.imagepipeline.image.QualityInfo;
					});
					public constructor();
					public getNextScanNumberToDecode(param0: number): number;
					public getQualityInfo(param0: number): com.facebook.imagepipeline.image.QualityInfo;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class ProgressiveJpegParser extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.ProgressiveJpegParser>;
					public getBestScanEndOffset(): number;
					public parseMoreData(param0: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public isEndMarkerRead(): boolean;
					public isJpeg(): boolean;
					public getBestScanNumber(): number;
					public constructor(param0: com.facebook.common.memory.ByteArrayPool);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module decoder {
				export class SimpleProgressiveJpegConfig extends java.lang.Object implements com.facebook.imagepipeline.decoder.ProgressiveJpegConfig {
					public static class: java.lang.Class<com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig>;
					public getNextScanNumberToDecode(param0: number): number;
					public getQualityInfo(param0: number): com.facebook.imagepipeline.image.QualityInfo;
					public constructor();
					public constructor(param0: com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DynamicValueConfig);
				}
				export module SimpleProgressiveJpegConfig {
					export class DefaultDynamicValueConfig extends java.lang.Object implements com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DynamicValueConfig {
						public static class: java.lang.Class<com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DefaultDynamicValueConfig>;
						public getScansToDecode(): java.util.List<java.lang.Integer>;
						public getGoodEnoughScanNumber(): number;
					}
					export class DynamicValueConfig extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig.DynamicValueConfig>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.decoder.SimpleProgressiveJpegConfig$DynamicValueConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getScansToDecode(): java.util.List<java.lang.Integer>;
							getGoodEnoughScanNumber(): number;
						});
						public constructor();
						public getScansToDecode(): java.util.List<java.lang.Integer>;
						public getGoodEnoughScanNumber(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module drawable {
				export class DrawableFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.drawable.DrawableFactory>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.drawable.DrawableFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
						createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
					});
					public constructor();
					public createDrawable(param0: com.facebook.imagepipeline.image.CloseableImage): globalAndroid.graphics.drawable.Drawable;
					public supportsImageType(param0: com.facebook.imagepipeline.image.CloseableImage): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export class CloseableAnimatedImage extends com.facebook.imagepipeline.image.CloseableImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableAnimatedImage>;
					public constructor(param0: com.facebook.imagepipeline.animated.base.AnimatedImageResult);
					public getImage(): com.facebook.imagepipeline.animated.base.AnimatedImage;
					public getImageResult(): com.facebook.imagepipeline.animated.base.AnimatedImageResult;
					public constructor();
					public getHeight(): number;
					public close(): void;
					public getWidth(): number;
					public isStateful(): boolean;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public getSizeInBytes(): number;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export abstract class CloseableBitmap extends com.facebook.imagepipeline.image.CloseableImage {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableBitmap>;
					public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
					public constructor();
					public getHeight(): number;
					public close(): void;
					public getWidth(): number;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export abstract class CloseableImage extends java.lang.Object implements java.io.Closeable, com.facebook.imagepipeline.image.ImageInfo {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableImage>;
					public constructor();
					public getHeight(): number;
					public finalize(): void;
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public isStateful(): boolean;
					public getWidth(): number;
					public getSizeInBytes(): number;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export class CloseableStaticBitmap extends com.facebook.imagepipeline.image.CloseableBitmap {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.CloseableStaticBitmap>;
					public convertToBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public cloneUnderlyingBitmapReference(): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getUnderlyingBitmap(): globalAndroid.graphics.Bitmap;
					public getHeight(): number;
					public getWidth(): number;
					public getExifOrientation(): number;
					public getSizeInBytes(): number;
					public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, param2: com.facebook.imagepipeline.image.QualityInfo, param3: number, param4: number);
					public constructor();
					public constructor(param0: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param1: com.facebook.imagepipeline.image.QualityInfo, param2: number);
					public getRotationAngle(): number;
					public close(): void;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					public constructor(param0: com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>, param1: com.facebook.imagepipeline.image.QualityInfo, param2: number, param3: number);
					public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>, param2: com.facebook.imagepipeline.image.QualityInfo, param3: number);
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export class EncodedImage extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.EncodedImage>;
					public static UNKNOWN_ROTATION_ANGLE: number;
					public static UNKNOWN_WIDTH: number;
					public static UNKNOWN_HEIGHT: number;
					public static UNKNOWN_STREAM_SIZE: number;
					public static DEFAULT_SAMPLE_SIZE: number;
					public copyMetaDataFrom(param0: com.facebook.imagepipeline.image.EncodedImage): void;
					public setHeight(param0: number): void;
					public static isValid(param0: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public setImageFormat(param0: com.facebook.imageformat.ImageFormat): void;
					public static cloneOrNull(param0: com.facebook.imagepipeline.image.EncodedImage): com.facebook.imagepipeline.image.EncodedImage;
					public getSize(): number;
					public constructor(param0: com.facebook.common.internal.Supplier<java.io.FileInputStream>);
					public static closeSafely(param0: com.facebook.imagepipeline.image.EncodedImage): void;
					public cloneOrNull(): com.facebook.imagepipeline.image.EncodedImage;
					public parseMetaData(): void;
					public getUnderlyingReferenceTestOnly(): com.facebook.common.references.SharedReference<com.facebook.common.memory.PooledByteBuffer>;
					public getByteBufferRef(): com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>;
					public setSampleSize(param0: number): void;
					public constructor(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>);
					public close(): void;
					public getInputStream(): java.io.InputStream;
					public isCompleteAt(param0: number): boolean;
					public getImageFormat(): com.facebook.imageformat.ImageFormat;
					public getFirstBytesAsHexString(param0: number): string;
					public setWidth(param0: number): void;
					public getHeight(): number;
					public getWidth(): number;
					public getBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public setStreamSize(param0: number): void;
					public setBytesRange(param0: com.facebook.imagepipeline.common.BytesRange): void;
					public getExifOrientation(): number;
					public setRotationAngle(param0: number): void;
					public constructor(param0: com.facebook.common.internal.Supplier<java.io.FileInputStream>, param1: number);
					public getSampleSize(): number;
					public isValid(): boolean;
					public getRotationAngle(): number;
					public static isMetaDataAvailable(param0: com.facebook.imagepipeline.image.EncodedImage): boolean;
					public setExifOrientation(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export class ImageInfo extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.ImageInfo>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getWidth(): number;
						getHeight(): number;
						getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
					});
					public constructor();
					public getHeight(): number;
					public getWidth(): number;
					public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export class ImmutableQualityInfo extends java.lang.Object implements com.facebook.imagepipeline.image.QualityInfo {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.ImmutableQualityInfo>;
					public static FULL_QUALITY: com.facebook.imagepipeline.image.QualityInfo;
					public equals(param0: any): boolean;
					public isOfGoodEnoughQuality(): boolean;
					public getQuality(): number;
					public isOfFullQuality(): boolean;
					public static of(param0: number, param1: boolean, param2: boolean): com.facebook.imagepipeline.image.QualityInfo;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module image {
				export class QualityInfo extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.image.QualityInfo>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.image.QualityInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getQuality(): number;
						isOfGoodEnoughQuality(): boolean;
						isOfFullQuality(): boolean;
					});
					public constructor();
					public isOfGoodEnoughQuality(): boolean;
					public getQuality(): number;
					public isOfFullQuality(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module listener {
				export class BaseRequestListener extends java.lang.Object implements com.facebook.imagepipeline.listener.RequestListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.BaseRequestListener>;
					public requiresExtraMap(param0: string): boolean;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public constructor();
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public onRequestCancellation(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module listener {
				export class ForwardingRequestListener extends java.lang.Object implements com.facebook.imagepipeline.listener.RequestListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.ForwardingRequestListener>;
					public constructor(param0: native.Array<com.facebook.imagepipeline.listener.RequestListener>);
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public requiresExtraMap(param0: string): boolean;
					public constructor(param0: java.util.Set<com.facebook.imagepipeline.listener.RequestListener>);
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestCancellation(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module listener {
				export class RequestListener extends java.lang.Object implements com.facebook.imagepipeline.producers.ProducerListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.RequestListener>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.listener.RequestListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
						onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
						onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
						onRequestCancellation(param0: string): void;
						onProducerStart(param0: string, param1: string): void;
						onProducerEvent(param0: string, param1: string, param2: string): void;
						onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
						onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
						requiresExtraMap(param0: string): boolean;
					});
					public constructor();
					public requiresExtraMap(param0: string): boolean;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public onRequestCancellation(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module listener {
				export class RequestLoggingListener extends java.lang.Object implements com.facebook.imagepipeline.listener.RequestListener {
					public static class: java.lang.Class<com.facebook.imagepipeline.listener.RequestLoggingListener>;
					public requiresExtraMap(param0: string): boolean;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public constructor();
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onRequestStart(param0: com.facebook.imagepipeline.request.ImageRequest, param1: any, param2: string, param3: boolean): void;
					public onRequestSuccess(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: boolean): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onRequestFailure(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: java.lang.Throwable, param3: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
					public onRequestCancellation(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export abstract class BasePool<V>  extends com.facebook.common.memory.Pool<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool<any>>;
					public isReusable(param0: any): boolean;
					public getStats(): java.util.Map<string,java.lang.Integer>;
					public free(param0: any): void;
					public getBucketedSize(param0: number): number;
					public alloc(param0: number): any;
					public getSizeInBytes(param0: number): number;
					public release(param0: any): void;
					public getBucketedSizeForValue(param0: any): number;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public get(param0: number): any;
					public onParamsChanged(): void;
					public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams, param2: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public initialize(): void;
				}
				export module BasePool {
					export class Counter extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.Counter>;
						public increment(param0: number): void;
						public decrement(param0: number): void;
						public reset(): void;
					}
					export class InvalidSizeException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.InvalidSizeException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
					export class InvalidValueException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.InvalidValueException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
					export class PoolSizeViolationException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.PoolSizeViolationException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
						public constructor(param0: number, param1: number, param2: number, param3: number);
					}
					export class SizeTooLargeException extends com.facebook.imagepipeline.memory.BasePool.InvalidSizeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.BasePool.SizeTooLargeException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: any);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class BitmapCounter extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapCounter>;
					public increase(param0: globalAndroid.graphics.Bitmap): boolean;
					public getMaxCount(): number;
					public associateBitmapsWithBitmapCounter(param0: java.util.List<globalAndroid.graphics.Bitmap>): java.util.List<com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>>;
					public getCount(): number;
					public decrease(param0: globalAndroid.graphics.Bitmap): void;
					public getMaxSize(): number;
					public getSize(): number;
					public getReleaser(): com.facebook.common.references.ResourceReleaser<globalAndroid.graphics.Bitmap>;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class BitmapCounterProvider extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapCounterProvider>;
					public static MAX_BITMAP_TOTAL_SIZE: number;
					public static MAX_BITMAP_COUNT: number;
					public constructor();
					public static get(): com.facebook.imagepipeline.memory.BitmapCounter;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class BitmapPool extends com.facebook.imagepipeline.memory.BasePool<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.BitmapPool>;
					public isReusable(param0: any): boolean;
					public free(param0: any): void;
					public free(param0: globalAndroid.graphics.Bitmap): void;
					public getBucketedSize(param0: number): number;
					public alloc(param0: number): any;
					public alloc(param0: number): globalAndroid.graphics.Bitmap;
					public getSizeInBytes(param0: number): number;
					public release(param0: any): void;
					public getBucketedSizeForValue(param0: any): number;
					public get(param0: number): any;
					public getBucketedSizeForValue(param0: globalAndroid.graphics.Bitmap): number;
					public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams, param2: com.facebook.imagepipeline.memory.PoolStatsTracker);
					public isReusable(param0: globalAndroid.graphics.Bitmap): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class Bucket<V>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.Bucket<any>>;
					public mItemSize: number;
					public mMaxLength: number;
					public incrementInUseCount(): void;
					public constructor(param0: number, param1: number, param2: number);
					public isMaxLengthExceeded(): boolean;
					public pop(): V;
					public decrementInUseCount(): void;
					public getInUseCount(): number;
					public release(param0: V): void;
					public get(): V;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class DefaultBitmapPoolParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultBitmapPoolParams>;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class DefaultByteArrayPoolParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultByteArrayPoolParams>;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class DefaultFlexByteArrayPoolParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultFlexByteArrayPoolParams>;
					public static DEFAULT_MAX_BYTE_ARRAY_SIZE: number;
					public static DEFAULT_MAX_NUM_THREADS: number;
					public static generateBuckets(param0: number, param1: number, param2: number): globalAndroid.util.SparseIntArray;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class DefaultNativeMemoryChunkPoolParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.DefaultNativeMemoryChunkPoolParams>;
					public static get(): com.facebook.imagepipeline.memory.PoolParams;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class FlexByteArrayPool extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.FlexByteArrayPool>;
					public getStats(): java.util.Map<string,java.lang.Integer>;
					public getMinBufferSize(): number;
					public get(param0: number): com.facebook.common.references.CloseableReference<native.Array<number>>;
					public release(param0: native.Array<number>): void;
					public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams);
				}
				export module FlexByteArrayPool {
					export class SoftRefByteArrayPool extends com.facebook.imagepipeline.memory.GenericByteArrayPool {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.FlexByteArrayPool.SoftRefByteArrayPool>;
						public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams, param2: com.facebook.imagepipeline.memory.PoolStatsTracker);
						public get(param0: number): any;
						public release(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class GenericByteArrayPool extends com.facebook.imagepipeline.memory.BasePool<native.Array<number>> implements com.facebook.common.memory.ByteArrayPool  {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.GenericByteArrayPool>;
					public getMinBufferSize(): number;
					public free(param0: any): void;
					public getBucketedSize(param0: number): number;
					public alloc(param0: number): any;
					public getBucketedSizeForValue(param0: native.Array<number>): number;
					public getSizeInBytes(param0: number): number;
					public release(param0: any): void;
					public getBucketedSizeForValue(param0: any): number;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public get(param0: number): any;
					public alloc(param0: number): native.Array<number>;
					public free(param0: native.Array<number>): void;
					public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams, param2: com.facebook.imagepipeline.memory.PoolStatsTracker);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class NativeMemoryChunk extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativeMemoryChunk>;
					public read(param0: number): number;
					public constructor();
					public finalize(): void;
					public close(): void;
					public write(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
					public copy(param0: number, param1: com.facebook.imagepipeline.memory.NativeMemoryChunk, param2: number, param3: number): void;
					public read(param0: number, param1: native.Array<number>, param2: number, param3: number): number;
					public getNativePtr(): number;
					public getSize(): number;
					public constructor(param0: number);
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class NativeMemoryChunkPool extends com.facebook.imagepipeline.memory.BasePool<com.facebook.imagepipeline.memory.NativeMemoryChunk> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativeMemoryChunkPool>;
					public isReusable(param0: any): boolean;
					public getMinBufferSize(): number;
					public free(param0: any): void;
					public getBucketedSize(param0: number): number;
					public alloc(param0: number): com.facebook.imagepipeline.memory.NativeMemoryChunk;
					public getBucketedSizeForValue(param0: com.facebook.imagepipeline.memory.NativeMemoryChunk): number;
					public alloc(param0: number): any;
					public isReusable(param0: com.facebook.imagepipeline.memory.NativeMemoryChunk): boolean;
					public getSizeInBytes(param0: number): number;
					public release(param0: any): void;
					public getBucketedSizeForValue(param0: any): number;
					public get(param0: number): any;
					public free(param0: com.facebook.imagepipeline.memory.NativeMemoryChunk): void;
					public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams, param2: com.facebook.imagepipeline.memory.PoolStatsTracker);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class NativePooledByteBuffer extends java.lang.Object implements com.facebook.common.memory.PooledByteBuffer {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativePooledByteBuffer>;
					public read(param0: number): number;
					public close(): void;
					public read(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
					public size(): number;
					public constructor(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.memory.NativeMemoryChunk>, param1: number);
					public getNativePtr(): number;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class NativePooledByteBufferFactory extends java.lang.Object implements com.facebook.common.memory.PooledByteBufferFactory {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativePooledByteBufferFactory>;
					public newOutputStream(param0: number): com.facebook.common.memory.PooledByteBufferOutputStream;
					public newByteBuffer(param0: number): com.facebook.common.memory.PooledByteBuffer;
					public newByteBuffer(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.memory.NativePooledByteBuffer;
					public newOutputStream(): com.facebook.common.memory.PooledByteBufferOutputStream;
					public newOutputStream(param0: number): com.facebook.imagepipeline.memory.NativePooledByteBufferOutputStream;
					public newByteBuffer(param0: native.Array<number>): com.facebook.common.memory.PooledByteBuffer;
					public newOutputStream(): com.facebook.imagepipeline.memory.NativePooledByteBufferOutputStream;
					public constructor(param0: com.facebook.imagepipeline.memory.NativeMemoryChunkPool, param1: com.facebook.common.memory.PooledByteStreams);
					public newByteBuffer(param0: number): com.facebook.imagepipeline.memory.NativePooledByteBuffer;
					public newByteBuffer(param0: native.Array<number>): com.facebook.imagepipeline.memory.NativePooledByteBuffer;
					public newByteBuffer(param0: java.io.InputStream): com.facebook.common.memory.PooledByteBuffer;
					public newByteBuffer(param0: java.io.InputStream, param1: number): com.facebook.common.memory.PooledByteBuffer;
					public newByteBuffer(param0: java.io.InputStream): com.facebook.imagepipeline.memory.NativePooledByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class NativePooledByteBufferOutputStream extends com.facebook.common.memory.PooledByteBufferOutputStream {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativePooledByteBufferOutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public write(param0: native.Array<number>): void;
					public constructor();
					public toByteBuffer(): com.facebook.common.memory.PooledByteBuffer;
					public close(): void;
					public size(): number;
					public write(param0: number): void;
					public flush(): void;
					public constructor(param0: com.facebook.imagepipeline.memory.NativeMemoryChunkPool, param1: number);
					public toByteBuffer(): com.facebook.imagepipeline.memory.NativePooledByteBuffer;
					public constructor(param0: com.facebook.imagepipeline.memory.NativeMemoryChunkPool);
				}
				export module NativePooledByteBufferOutputStream {
					export class InvalidStreamException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.NativePooledByteBufferOutputStream.InvalidStreamException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class NoOpPoolStatsTracker extends java.lang.Object implements com.facebook.imagepipeline.memory.PoolStatsTracker {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.NoOpPoolStatsTracker>;
					public setBasePool(param0: com.facebook.imagepipeline.memory.BasePool<any>): void;
					public onValueReuse(param0: number): void;
					public onHardCapReached(): void;
					public static getInstance(): com.facebook.imagepipeline.memory.NoOpPoolStatsTracker;
					public onSoftCapReached(): void;
					public onValueRelease(param0: number): void;
					public onAlloc(param0: number): void;
					public onFree(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class OOMSoftReferenceBucket<V>  extends com.facebook.imagepipeline.memory.Bucket<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.OOMSoftReferenceBucket<any>>;
					public constructor(param0: number, param1: number, param2: number);
					public pop(): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class PoolConfig extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolConfig>;
					public getBitmapPoolStatsTracker(): com.facebook.imagepipeline.memory.PoolStatsTracker;
					public getNativeMemoryChunkPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getBitmapPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getNativeMemoryChunkPoolStatsTracker(): com.facebook.imagepipeline.memory.PoolStatsTracker;
					public getSmallByteArrayPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getMemoryTrimmableRegistry(): com.facebook.common.memory.MemoryTrimmableRegistry;
					public static newBuilder(): com.facebook.imagepipeline.memory.PoolConfig.Builder;
					public getFlexByteArrayPoolParams(): com.facebook.imagepipeline.memory.PoolParams;
					public getSmallByteArrayPoolStatsTracker(): com.facebook.imagepipeline.memory.PoolStatsTracker;
				}
				export module PoolConfig {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolConfig.Builder>;
						public setBitmapPoolStatsTracker(param0: com.facebook.imagepipeline.memory.PoolStatsTracker): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setBitmapPoolParams(param0: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setSmallByteArrayPoolParams(param0: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setFlexByteArrayPoolParams(param0: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setSmallByteArrayPoolStatsTracker(param0: com.facebook.imagepipeline.memory.PoolStatsTracker): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public build(): com.facebook.imagepipeline.memory.PoolConfig;
						public setMemoryTrimmableRegistry(param0: com.facebook.common.memory.MemoryTrimmableRegistry): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setNativeMemoryChunkPoolParams(param0: com.facebook.imagepipeline.memory.PoolParams): com.facebook.imagepipeline.memory.PoolConfig.Builder;
						public setNativeMemoryChunkPoolStatsTracker(param0: com.facebook.imagepipeline.memory.PoolStatsTracker): com.facebook.imagepipeline.memory.PoolConfig.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class PoolFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolFactory>;
					public constructor(param0: com.facebook.imagepipeline.memory.PoolConfig);
					public getFlexByteArrayPool(): com.facebook.imagepipeline.memory.FlexByteArrayPool;
					public getSmallByteArrayPool(): com.facebook.common.memory.ByteArrayPool;
					public getSharedByteArray(): com.facebook.imagepipeline.memory.SharedByteArray;
					public getPooledByteBufferFactory(): com.facebook.common.memory.PooledByteBufferFactory;
					public getBitmapPool(): com.facebook.imagepipeline.memory.BitmapPool;
					public getPooledByteStreams(): com.facebook.common.memory.PooledByteStreams;
					public getNativeMemoryChunkPool(): com.facebook.imagepipeline.memory.NativeMemoryChunkPool;
					public getFlexByteArrayPoolMaxNumThreads(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class PoolParams extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolParams>;
					public static IGNORE_THREADS: number;
					public maxSizeHardCap: number;
					public maxSizeSoftCap: number;
					public bucketSizes: globalAndroid.util.SparseIntArray;
					public minBucketSize: number;
					public maxBucketSize: number;
					public maxNumThreads: number;
					public constructor(param0: number, param1: number, param2: globalAndroid.util.SparseIntArray);
					public constructor(param0: number, param1: globalAndroid.util.SparseIntArray);
					public constructor(param0: number, param1: number, param2: globalAndroid.util.SparseIntArray, param3: number, param4: number, param5: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class PoolStatsTracker extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.PoolStatsTracker>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.memory.PoolStatsTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setBasePool(param0: com.facebook.imagepipeline.memory.BasePool<any>): void;
						onValueReuse(param0: number): void;
						onSoftCapReached(): void;
						onHardCapReached(): void;
						onAlloc(param0: number): void;
						onFree(param0: number): void;
						onValueRelease(param0: number): void;
					});
					public constructor();
					public static SOFT_CAP: string;
					public static USED_COUNT: string;
					public static BUCKETS_USED_PREFIX: string;
					public static USED_BYTES: string;
					public static FREE_COUNT: string;
					public static FREE_BYTES: string;
					public static HARD_CAP: string;
					public setBasePool(param0: com.facebook.imagepipeline.memory.BasePool<any>): void;
					public onValueReuse(param0: number): void;
					public onHardCapReached(): void;
					public onSoftCapReached(): void;
					public onValueRelease(param0: number): void;
					public onAlloc(param0: number): void;
					public onFree(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module memory {
				export class SharedByteArray extends java.lang.Object implements com.facebook.common.memory.MemoryTrimmable {
					public static class: java.lang.Class<com.facebook.imagepipeline.memory.SharedByteArray>;
					public get(param0: number): com.facebook.common.references.CloseableReference<native.Array<number>>;
					public trim(param0: com.facebook.common.memory.MemoryTrimType): void;
					public constructor(param0: com.facebook.common.memory.MemoryTrimmableRegistry, param1: com.facebook.imagepipeline.memory.PoolParams);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class Bitmaps extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.Bitmaps>;
					public static releaseByteBuffer(param0: globalAndroid.graphics.Bitmap): void;
					public constructor();
					public static copyBitmap(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
					public static pinBitmap(param0: globalAndroid.graphics.Bitmap): void;
					public static reconfigureBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: globalAndroid.graphics.Bitmap.Config): void;
					public static getByteBuffer(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): java.nio.ByteBuffer;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class ImagePipelineNativeLoader extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.ImagePipelineNativeLoader>;
					public static DSO_NAME: string;
					public static DEPENDENCIES: java.util.List<string>;
					public static load(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class JpegTranscoder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.JpegTranscoder>;
					public static MIN_QUALITY: number;
					public static MAX_QUALITY: number;
					public static MIN_SCALE_NUMERATOR: number;
					public static MAX_SCALE_NUMERATOR: number;
					public static SCALE_DENOMINATOR: number;
					public static transcodeJpegWithExifOrientation(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: number): void;
					public constructor();
					public static transcodeJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: number): void;
					public static isRotationAngleAllowed(param0: number): boolean;
					public static isExifOrientationAllowed(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class NativeBlurFilter extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeBlurFilter>;
					public constructor();
					public static iterativeBoxBlur(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class NativeRoundingFilter extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.NativeRoundingFilter>;
					public constructor();
					public static toCircle(param0: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class WebpTranscoder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.WebpTranscoder>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.nativecode.WebpTranscoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isWebpNativelySupported(param0: com.facebook.imageformat.ImageFormat): boolean;
						transcodeWebpToJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): void;
						transcodeWebpToPng(param0: java.io.InputStream, param1: java.io.OutputStream): void;
					});
					public constructor();
					public transcodeWebpToPng(param0: java.io.InputStream, param1: java.io.OutputStream): void;
					public isWebpNativelySupported(param0: com.facebook.imageformat.ImageFormat): boolean;
					public transcodeWebpToJpeg(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module nativecode {
				export class WebpTranscoderFactory extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.nativecode.WebpTranscoderFactory>;
					public static sWebpTranscoderPresent: boolean;
					public constructor();
					public static getWebpTranscoder(): com.facebook.imagepipeline.nativecode.WebpTranscoder;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module platform {
				export class ArtDecoder extends java.lang.Object implements com.facebook.imagepipeline.platform.PlatformDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.ArtDecoder>;
					public constructor(param0: com.facebook.imagepipeline.memory.BitmapPool, param1: number, param2: globalAndroid.support.v4.util.Pools.SynchronizedPool<any>);
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeStaticImageFromStream(param0: java.io.InputStream, param1: globalAndroid.graphics.BitmapFactory.Options, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module platform {
				export abstract class DalvikPurgeableDecoder extends java.lang.Object implements com.facebook.imagepipeline.platform.PlatformDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.DalvikPurgeableDecoder>;
					public static EOI: native.Array<number>;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public pinBitmap(param0: globalAndroid.graphics.Bitmap): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public static endsWithEOI(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module platform {
				export class GingerbreadPurgeableDecoder extends com.facebook.imagepipeline.platform.DalvikPurgeableDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.GingerbreadPurgeableDecoder>;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public decodeFileDescriptorAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: number, param2: native.Array<number>, param3: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeJPEGByteArrayAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeByteArrayAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module platform {
				export class KitKatPurgeableDecoder extends com.facebook.imagepipeline.platform.DalvikPurgeableDecoder {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.KitKatPurgeableDecoder>;
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor(param0: com.facebook.imagepipeline.memory.FlexByteArrayPool);
					public decodeJPEGByteArrayAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: number, param2: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
					public decodeByteArrayAsPurgeable(param0: com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>, param1: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module platform {
				export class PlatformDecoder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.platform.PlatformDecoder>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.platform.PlatformDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					});
					public constructor();
					public decodeJPEGFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect, param3: number): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public decodeFromEncodedImage(param0: com.facebook.imagepipeline.image.EncodedImage, param1: globalAndroid.graphics.Bitmap.Config, param2: globalAndroid.graphics.Rect): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module postprocessors {
				export class IterativeBoxBlurPostProcessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.IterativeBoxBlurPostProcessor>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(param0: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
					public constructor(param0: number);
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module postprocessors {
				export class RoundAsCirclePostprocessor extends com.facebook.imagepipeline.request.BasePostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.postprocessors.RoundAsCirclePostprocessor>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(param0: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class AddImageTransformMetaDataProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.AddImageTransformMetaDataProducer>;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module AddImageTransformMetaDataProducer {
					export class AddImageTransformMetaDataConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.AddImageTransformMetaDataProducer.AddImageTransformMetaDataConsumer>;
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export abstract class BaseConsumer<T>  extends com.facebook.imagepipeline.producers.Consumer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseConsumer<any>>;
					public onNewResult(param0: any, param1: number): void;
					public onUnhandledException(param0: java.lang.Exception): void;
					public static statusHasFlag(param0: number, param1: number): boolean;
					public onFailure(param0: java.lang.Throwable): void;
					public static turnOffStatusFlag(param0: number, param1: number): number;
					public onProgressUpdateImpl(param0: number): void;
					public static isLast(param0: number): boolean;
					public onFailureImpl(param0: java.lang.Throwable): void;
					public static isNotLast(param0: number): boolean;
					public onCancellationImpl(): void;
					public onCancellation(): void;
					public constructor();
					public static turnOnStatusFlag(param0: number, param1: number): number;
					public static simpleStatusForIsLast(param0: boolean): number;
					public static statusHasAnyFlag(param0: number, param1: number): boolean;
					public onNewResultImpl(param0: any, param1: number): void;
					public onProgressUpdate(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export abstract class BaseNetworkFetcher<FETCH_STATE>  extends com.facebook.imagepipeline.producers.NetworkFetcher<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseNetworkFetcher<any>>;
					public onFetchCompletion(param0: any, param1: number): void;
					public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
					public constructor();
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): any;
					public shouldPropagate(param0: any): boolean;
					public fetch(param0: any, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BaseProducerContext extends java.lang.Object implements com.facebook.imagepipeline.producers.ProducerContext {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseProducerContext>;
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public constructor(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: com.facebook.imagepipeline.producers.ProducerListener, param3: any, param4: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, param5: boolean, param6: boolean, param7: com.facebook.imagepipeline.common.Priority);
					public getId(): string;
					public setIsPrefetchNoCallbacks(param0: boolean): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public isCancelled(): boolean;
					public addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public cancel(): void;
					public setPriorityNoCallbacks(param0: com.facebook.imagepipeline.common.Priority): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public setIsIntermediateResultExpectedNoCallbacks(param0: boolean): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public cancelNoCallbacks(): java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					public static callOnIsPrefetchChanged(param0: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public static callOnCancellationRequested(param0: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public static callOnIsIntermediateResultExpectedChanged(param0: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public static callOnPriorityChanged(param0: java.util.List<com.facebook.imagepipeline.producers.ProducerContextCallbacks>): void;
					public getListener(): com.facebook.imagepipeline.producers.ProducerListener;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public isIntermediateResultExpected(): boolean;
					public getCallerContext(): any;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public isPrefetch(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BaseProducerContextCallbacks extends java.lang.Object implements com.facebook.imagepipeline.producers.ProducerContextCallbacks {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BaseProducerContextCallbacks>;
					public onIsPrefetchChanged(): void;
					public constructor();
					public onIsIntermediateResultExpectedChanged(): void;
					public onPriorityChanged(): void;
					public onCancellationRequested(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BitmapMemoryCacheGetProducer extends com.facebook.imagepipeline.producers.BitmapMemoryCacheProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheGetProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param1: com.facebook.imagepipeline.cache.CacheKeyFactory, param2: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public wrapConsumer(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.cache.common.CacheKey): com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BitmapMemoryCacheKeyMultiplexProducer extends com.facebook.imagepipeline.producers.MultiplexProducer<globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheKeyMultiplexProducer>;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): any;
					public cloneOrNull(param0: any): any;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
					public cloneOrNull(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>): com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>;
					public constructor(param0: com.facebook.imagepipeline.cache.CacheKeyFactory, param1: com.facebook.imagepipeline.producers.Producer<any>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BitmapMemoryCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapMemoryCacheProducer>;
					public static PRODUCER_NAME: string;
					public static EXTRA_CACHED_VALUE_FOUND: string;
					public constructor(param0: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param1: com.facebook.imagepipeline.cache.CacheKeyFactory, param2: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public wrapConsumer(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.cache.common.CacheKey): com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BitmapPrepareProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapPrepareProducer>;
					public static PRODUCER_NAME: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: number, param2: number, param3: boolean);
				}
				export module BitmapPrepareProducer {
					export class BitmapPrepareConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.BitmapPrepareProducer.BitmapPrepareConsumer>;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class BranchOnSeparateImagesProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.BranchOnSeparateImagesProducer>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module BranchOnSeparateImagesProducer {
					export class OnFirstImageConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.BranchOnSeparateImagesProducer.OnFirstImageConsumer>;
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailureImpl(param0: java.lang.Throwable): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class Consumer<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.Consumer<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onNewResult(param0: T, param1: number): void;
						onFailure(param0: java.lang.Throwable): void;
						onCancellation(): void;
						onProgressUpdate(param0: number): void;
					});
					public constructor();
					public static IS_PARTIAL_RESULT: number;
					public static NO_FLAGS: number;
					public static DO_NOT_CACHE_ENCODED: number;
					public static IS_LAST: number;
					public static IS_PLACEHOLDER: number;
					public static IS_RESIZING_DONE: number;
					public onCancellation(): void;
					public onNewResult(param0: T, param1: number): void;
					public onFailure(param0: java.lang.Throwable): void;
					public onProgressUpdate(param0: number): void;
				}
				export module Consumer {
					export class Status extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.Consumer.Status>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.Consumer$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							annotationType(): java.lang.Class<any>;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class DataFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DataFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(param0: com.facebook.common.memory.PooledByteBufferFactory);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class DecodeProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer>;
					public static PRODUCER_NAME: string;
					public static EXTRA_BITMAP_SIZE: string;
					public static EXTRA_HAS_GOOD_QUALITY: string;
					public static EXTRA_IS_FINAL: string;
					public static EXTRA_IMAGE_FORMAT_NAME: string;
					public static ENCODED_IMAGE_SIZE: string;
					public static REQUESTED_IMAGE_SIZE: string;
					public static SAMPLE_SIZE: string;
					public constructor(param0: com.facebook.common.memory.ByteArrayPool, param1: java.util.concurrent.Executor, param2: com.facebook.imagepipeline.decoder.ImageDecoder, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: boolean, param5: boolean, param6: boolean, param7: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, param8: com.facebook.common.internal.Supplier<java.lang.Boolean>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module DecodeProducer {
					export class LocalImagesProgressiveDecoder extends com.facebook.imagepipeline.producers.DecodeProducer.ProgressiveDecoder {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.LocalImagesProgressiveDecoder>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						public constructor();
						public updateDecodeJob(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): boolean;
						public onFailure(param0: java.lang.Throwable): void;
						public getIntermediateImageEndOffset(param0: com.facebook.imagepipeline.image.EncodedImage): number;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext, param2: boolean);
					}
					export class NetworkImagesProgressiveDecoder extends com.facebook.imagepipeline.producers.DecodeProducer.ProgressiveDecoder {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.NetworkImagesProgressiveDecoder>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						public constructor();
						public updateDecodeJob(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): boolean;
						public onFailure(param0: java.lang.Throwable): void;
						public getIntermediateImageEndOffset(param0: com.facebook.imagepipeline.image.EncodedImage): number;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext, param2: com.facebook.imagepipeline.decoder.ProgressiveJpegParser, param3: com.facebook.imagepipeline.decoder.ProgressiveJpegConfig, param4: boolean);
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext, param2: boolean);
					}
					export abstract class ProgressiveDecoder extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DecodeProducer.ProgressiveDecoder>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public updateDecodeJob(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): boolean;
						public onProgressUpdate(param0: number): void;
						public onProgressUpdateImpl(param0: number): void;
						public onNewResult(param0: any, param1: number): void;
						public getQualityInfo(): com.facebook.imagepipeline.image.QualityInfo;
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailureImpl(param0: java.lang.Throwable): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public getIntermediateImageEndOffset(param0: com.facebook.imagepipeline.image.EncodedImage): number;
						public onCancellation(): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext, param2: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export abstract class DelegatingConsumer<I, O>  extends com.facebook.imagepipeline.producers.BaseConsumer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DelegatingConsumer<any,any>>;
					public onNewResult(param0: any, param1: number): void;
					public onCancellationImpl(): void;
					public onCancellation(): void;
					public constructor();
					public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
					public onFailure(param0: java.lang.Throwable): void;
					public onProgressUpdateImpl(param0: number): void;
					public onProgressUpdate(param0: number): void;
					public getConsumer(): com.facebook.imagepipeline.producers.Consumer<any>;
					public onFailureImpl(param0: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class DiskCacheReadProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheReadProducer>;
					public static PRODUCER_NAME: string;
					public static EXTRA_CACHED_VALUE_FOUND: string;
					public static ENCODED_IMAGE_SIZE: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.cache.BufferedDiskCache, param1: com.facebook.imagepipeline.cache.BufferedDiskCache, param2: com.facebook.imagepipeline.cache.CacheKeyFactory, param3: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class DiskCacheWriteProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheWriteProducer>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.cache.BufferedDiskCache, param1: com.facebook.imagepipeline.cache.BufferedDiskCache, param2: com.facebook.imagepipeline.cache.CacheKeyFactory, param3: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module DiskCacheWriteProducer {
					export class DiskCacheWriteConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.DiskCacheWriteProducer.DiskCacheWriteConsumer>;
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class DownsampleUtil extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.DownsampleUtil>;
					public static DEFAULT_SAMPLE_SIZE: number;
					public static determineSampleSize(param0: com.facebook.imagepipeline.request.ImageRequest, param1: com.facebook.imagepipeline.image.EncodedImage): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class EncodedCacheKeyMultiplexProducer extends com.facebook.imagepipeline.producers.MultiplexProducer<globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>,com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedCacheKeyMultiplexProducer>;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): any;
					public cloneOrNull(param0: any): any;
					public cloneOrNull(param0: com.facebook.imagepipeline.image.EncodedImage): com.facebook.imagepipeline.image.EncodedImage;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): globalAndroid.util.Pair<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
					public constructor(param0: com.facebook.imagepipeline.cache.CacheKeyFactory, param1: com.facebook.imagepipeline.producers.Producer<any>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class EncodedMemoryCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedMemoryCacheProducer>;
					public static PRODUCER_NAME: string;
					public static EXTRA_CACHED_VALUE_FOUND: string;
					public constructor(param0: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param1: com.facebook.imagepipeline.cache.CacheKeyFactory, param2: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module EncodedMemoryCacheProducer {
					export class EncodedMemoryCacheConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.EncodedMemoryCacheProducer.EncodedMemoryCacheConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.common.memory.PooledByteBuffer>, param2: com.facebook.cache.common.CacheKey);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class FetchState extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.FetchState>;
					public getLastIntermediateResultTimeMs(): number;
					public setLastIntermediateResultTimeMs(param0: number): void;
					public getOnNewResultStatusFlags(): number;
					public getId(): string;
					public getListener(): com.facebook.imagepipeline.producers.ProducerListener;
					public getResponseBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public getConsumer(): com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>;
					public getContext(): com.facebook.imagepipeline.producers.ProducerContext;
					public getUri(): globalAndroid.net.Uri;
					public setOnNewResultStatusFlags(param0: number): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext);
					public setResponseBytesRange(param0: com.facebook.imagepipeline.common.BytesRange): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class HttpUrlConnectionNetworkFetcher extends com.facebook.imagepipeline.producers.BaseNetworkFetcher<com.facebook.imagepipeline.producers.FetchState> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.HttpUrlConnectionNetworkFetcher>;
					public static HTTP_TEMPORARY_REDIRECT: number;
					public static HTTP_PERMANENT_REDIRECT: number;
					public static HTTP_DEFAULT_TIMEOUT: number;
					public onFetchCompletion(param0: any, param1: number): void;
					public getExtraMap(param0: any, param1: number): java.util.Map<string,string>;
					public constructor();
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): any;
					public shouldPropagate(param0: any): boolean;
					public fetch(param0: any, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
					public constructor(param0: number);
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): com.facebook.imagepipeline.producers.FetchState;
					public fetch(param0: com.facebook.imagepipeline.producers.FetchState, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class JobScheduler extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler>;
					public getQueuedTime(): number;
					public clearJob(): void;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.imagepipeline.producers.JobScheduler.JobRunnable, param2: number);
					public updateJob(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): boolean;
					public scheduleJob(): boolean;
				}
				export module JobScheduler {
					export class JobRunnable extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler.JobRunnable>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.JobScheduler$JobRunnable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							run(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						});
						public constructor();
						public run(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
					}
					export class JobStartExecutorSupplier extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler.JobStartExecutorSupplier>;
					}
					export class JobState {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.JobScheduler.JobState>;
						public static IDLE: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static QUEUED: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static RUNNING: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static RUNNING_AND_PENDING: com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.facebook.imagepipeline.producers.JobScheduler.JobState;
						public static values(): native.Array<com.facebook.imagepipeline.producers.JobScheduler.JobState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalAssetFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalAssetFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.res.AssetManager);
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalContentUriFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalContentUriFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalContentUriThumbnailFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer implements com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage>  {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalContentUriThumbnailFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalExifThumbnailProducer extends com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalExifThumbnailProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export abstract class LocalFetchProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalFetchProducer>;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public getByteBufferBackedEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalFileFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalFileFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalResourceFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalResourceFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.res.Resources);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class LocalVideoThumbnailProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.LocalVideoThumbnailProducer>;
					public static PRODUCER_NAME: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: java.util.concurrent.Executor, param1: globalAndroid.content.ContentResolver);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class MediaVariationsFallbackProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.MediaVariationsFallbackProducer>;
					public static PRODUCER_NAME: string;
					public static EXTRA_CACHED_VALUE_FOUND: string;
					public static EXTRA_CACHED_VALUE_USED_AS_LAST: string;
					public static EXTRA_VARIANTS_COUNT: string;
					public static EXTRA_VARIANTS_SOURCE: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.cache.BufferedDiskCache, param1: com.facebook.imagepipeline.cache.BufferedDiskCache, param2: com.facebook.imagepipeline.cache.CacheKeyFactory, param3: com.facebook.imagepipeline.cache.MediaVariationsIndex, param4: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
				}
				export module MediaVariationsFallbackProducer {
					export class MediaVariationsConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.MediaVariationsFallbackProducer.MediaVariationsConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext, param2: string);
					}
					export class VariantComparator extends java.util.Comparator<com.facebook.imagepipeline.request.MediaVariations.Variant> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.MediaVariationsFallbackProducer.VariantComparator>;
						public equals(param0: any): boolean;
						public compare(param0: com.facebook.imagepipeline.request.MediaVariations.Variant, param1: com.facebook.imagepipeline.request.MediaVariations.Variant): number;
						public compare(param0: any, param1: any): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export abstract class MultiplexProducer<K, T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.MultiplexProducer<any,any>>;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getKey(param0: com.facebook.imagepipeline.producers.ProducerContext): any;
					public cloneOrNull(param0: any): any;
				}
				export module MultiplexProducer {
					export class Multiplexer extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer>;
						public onCancelled(param0: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer): void;
						public onNextResult(param0: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer, param1: any, param2: number): void;
						public addNewConsumer(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): boolean;
						public constructor(param0: any);
						public onFailure(param0: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer, param1: java.lang.Throwable): void;
						public onProgressUpdate(param0: com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer, param1: number): void;
					}
					export module Multiplexer {
						export class ForwardingConsumer extends com.facebook.imagepipeline.producers.BaseConsumer<any> {
							public static class: java.lang.Class<com.facebook.imagepipeline.producers.MultiplexProducer.Multiplexer.ForwardingConsumer>;
							public onCancellationImpl(): void;
							public onCancellation(): void;
							public onFailure(param0: java.lang.Throwable): void;
							public onNewResult(param0: any, param1: number): void;
							public onFailureImpl(param0: java.lang.Throwable): void;
							public onProgressUpdateImpl(param0: number): void;
							public onNewResultImpl(param0: any, param1: number): void;
							public onProgressUpdate(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class NetworkFetchProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.NetworkFetchProducer>;
					public static PRODUCER_NAME: string;
					public static INTERMEDIATE_RESULT_PRODUCER_EVENT: string;
					public constructor(param0: com.facebook.common.memory.PooledByteBufferFactory, param1: com.facebook.common.memory.ByteArrayPool, param2: com.facebook.imagepipeline.producers.NetworkFetcher<any>);
					public onResponse(param0: com.facebook.imagepipeline.producers.FetchState, param1: java.io.InputStream, param2: number): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public handleFinalResult(param0: com.facebook.common.memory.PooledByteBufferOutputStream, param1: com.facebook.imagepipeline.producers.FetchState): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public static calculateProgress(param0: number, param1: number): number;
					public maybeHandleIntermediateResult(param0: com.facebook.common.memory.PooledByteBufferOutputStream, param1: com.facebook.imagepipeline.producers.FetchState): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class NetworkFetcher<FETCH_STATE>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.NetworkFetcher<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): FETCH_STATE;
						fetch(param0: FETCH_STATE, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
						shouldPropagate(param0: FETCH_STATE): boolean;
						onFetchCompletion(param0: FETCH_STATE, param1: number): void;
						getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string,string>;
					});
					public constructor();
					public createFetchState(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): FETCH_STATE;
					public getExtraMap(param0: FETCH_STATE, param1: number): java.util.Map<string,string>;
					public fetch(param0: FETCH_STATE, param1: com.facebook.imagepipeline.producers.NetworkFetcher.Callback): void;
					public shouldPropagate(param0: FETCH_STATE): boolean;
					public onFetchCompletion(param0: FETCH_STATE, param1: number): void;
				}
				export module NetworkFetcher {
					export class Callback extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.NetworkFetcher.Callback>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.producers.NetworkFetcher$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResponse(param0: java.io.InputStream, param1: number): void;
							onFailure(param0: java.lang.Throwable): void;
							onCancellation(): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onCancellation(): void;
						public onResponse(param0: java.io.InputStream, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class NullProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.NullProducer<any>>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class PartialDiskCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PartialDiskCacheProducer>;
					public static PRODUCER_NAME: string;
					public static EXTRA_CACHED_VALUE_FOUND: string;
					public static ENCODED_IMAGE_SIZE: string;
					public constructor(param0: com.facebook.imagepipeline.cache.BufferedDiskCache, param1: com.facebook.imagepipeline.cache.CacheKeyFactory, param2: com.facebook.common.memory.PooledByteBufferFactory, param3: com.facebook.common.memory.ByteArrayPool, param4: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module PartialDiskCacheProducer {
					export class PartialDiskCacheConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PartialDiskCacheProducer.PartialDiskCacheConsumer>;
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class PostprocessedBitmapMemoryCacheProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessedBitmapMemoryCacheProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>, param1: com.facebook.imagepipeline.cache.CacheKeyFactory, param2: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getProducerName(): string;
				}
				export module PostprocessedBitmapMemoryCacheProducer {
					export class CachedPostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessedBitmapMemoryCacheProducer.CachedPostprocessorConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.cache.common.CacheKey, param2: boolean, param3: com.facebook.imagepipeline.cache.MemoryCache<com.facebook.cache.common.CacheKey,com.facebook.imagepipeline.image.CloseableImage>);
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class PostprocessorProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer>;
					public static NAME: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory, param2: java.util.concurrent.Executor);
				}
				export module PostprocessorProducer {
					export class PostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer.PostprocessorConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public onFailureImpl(param0: java.lang.Throwable): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>>, param1: com.facebook.imagepipeline.producers.ProducerListener, param2: string, param3: com.facebook.imagepipeline.request.Postprocessor, param4: com.facebook.imagepipeline.producers.ProducerContext);
						public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, param1: number): void;
					}
					export class RepeatedPostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> implements com.facebook.imagepipeline.request.RepeatedPostprocessorRunner  {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer.RepeatedPostprocessorConsumer>;
						public onFailureImpl(param0: java.lang.Throwable): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public update(): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, param1: number): void;
					}
					export class SingleUsePostprocessorConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>,com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.PostprocessorProducer.SingleUsePostprocessorConsumer>;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
						public onNewResultImpl(param0: com.facebook.common.references.CloseableReference<com.facebook.imagepipeline.image.CloseableImage>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class Producer<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.Producer<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.Producer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						produceResults(param0: com.facebook.imagepipeline.producers.Consumer<T>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					});
					public constructor();
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<T>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ProducerConstants extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerConstants>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ProducerContext extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerContext>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
						getId(): string;
						getListener(): com.facebook.imagepipeline.producers.ProducerListener;
						getCallerContext(): any;
						getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						isPrefetch(): boolean;
						getPriority(): com.facebook.imagepipeline.common.Priority;
						isIntermediateResultExpected(): boolean;
						addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					});
					public constructor();
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public getId(): string;
					public getListener(): com.facebook.imagepipeline.producers.ProducerListener;
					public addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public isIntermediateResultExpected(): boolean;
					public getCallerContext(): any;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public isPrefetch(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ProducerContextCallbacks extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerContextCallbacks>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerContextCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCancellationRequested(): void;
						onIsPrefetchChanged(): void;
						onIsIntermediateResultExpectedChanged(): void;
						onPriorityChanged(): void;
					});
					public constructor();
					public onIsPrefetchChanged(): void;
					public onIsIntermediateResultExpectedChanged(): void;
					public onPriorityChanged(): void;
					public onCancellationRequested(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ProducerListener extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ProducerListener>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ProducerListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onProducerStart(param0: string, param1: string): void;
						onProducerEvent(param0: string, param1: string, param2: string): void;
						onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
						onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
						onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
						requiresExtraMap(param0: string): boolean;
					});
					public constructor();
					public requiresExtraMap(param0: string): boolean;
					public onProducerStart(param0: string, param1: string): void;
					public onProducerFinishWithSuccess(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithCancellation(param0: string, param1: string, param2: java.util.Map<string,string>): void;
					public onProducerFinishWithFailure(param0: string, param1: string, param2: java.lang.Throwable, param3: java.util.Map<string,string>): void;
					public onUltimateProducerReached(param0: string, param1: string, param2: boolean): void;
					public onProducerEvent(param0: string, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class QualifiedResourceFetchProducer extends com.facebook.imagepipeline.producers.LocalFetchProducer {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.QualifiedResourceFetchProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory);
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: globalAndroid.content.ContentResolver);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public getEncodedImage(param0: java.io.InputStream, param1: number): com.facebook.imagepipeline.image.EncodedImage;
					public getEncodedImage(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.image.EncodedImage;
					public getProducerName(): string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class RemoveImageTransformMetaDataProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.RemoveImageTransformMetaDataProducer>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module RemoveImageTransformMetaDataProducer {
					export class RemoveImageTransformMetaDataConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.common.references.CloseableReference<com.facebook.common.memory.PooledByteBuffer>> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.RemoveImageTransformMetaDataProducer.RemoveImageTransformMetaDataConsumer>;
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ResizeAndRotateProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ResizeAndRotateProducer>;
					public static PRODUCER_NAME: string;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: boolean, param3: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>, param4: boolean);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module ResizeAndRotateProducer {
					export class TransformingConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ResizeAndRotateProducer.TransformingConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext);
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class SettableProducerContext extends com.facebook.imagepipeline.producers.BaseProducerContext {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.SettableProducerContext>;
					public setIsPrefetch(param0: boolean): void;
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public constructor(param0: com.facebook.imagepipeline.request.ImageRequest, param1: string, param2: com.facebook.imagepipeline.producers.ProducerListener, param3: any, param4: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, param5: boolean, param6: boolean, param7: com.facebook.imagepipeline.common.Priority);
					public getId(): string;
					public addCallbacks(param0: com.facebook.imagepipeline.producers.ProducerContextCallbacks): void;
					public constructor(param0: com.facebook.imagepipeline.producers.ProducerContext);
					public setIsIntermediateResultExpected(param0: boolean): void;
					public getListener(): com.facebook.imagepipeline.producers.ProducerListener;
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					public isIntermediateResultExpected(): boolean;
					public getCallerContext(): any;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public setPriority(param0: com.facebook.imagepipeline.common.Priority): void;
					public isPrefetch(): boolean;
					public constructor(param0: com.facebook.imagepipeline.request.ImageRequest, param1: com.facebook.imagepipeline.producers.ProducerContext);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export abstract class StatefulProducerRunnable<T>  extends com.facebook.common.executors.StatefulRunnable<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.StatefulProducerRunnable<any>>;
					public onFailure(param0: java.lang.Exception): void;
					public onCancellation(): void;
					public constructor();
					public getExtraMapOnSuccess(param0: any): java.util.Map<string,string>;
					public run(): void;
					public getExtraMapOnFailure(param0: java.lang.Exception): java.util.Map<string,string>;
					public disposeResult(param0: any): void;
					public getExtraMapOnCancellation(): java.util.Map<string,string>;
					public onSuccess(param0: any): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerListener, param2: string, param3: string);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class SwallowResultProducer<T>  extends com.facebook.imagepipeline.producers.Producer<java.lang.Void> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.SwallowResultProducer<any>>;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<java.lang.Void>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ThreadHandoffProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThreadHandoffProducer<any>>;
					public static PRODUCER_NAME: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: com.facebook.imagepipeline.producers.Producer<any>, param1: com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ThreadHandoffProducerQueue extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThreadHandoffProducerQueue>;
					public addToQueueOrExecute(param0: java.lang.Runnable): void;
					public isQueueing(): boolean;
					public constructor(param0: java.util.concurrent.Executor);
					public remove(param0: java.lang.Runnable): void;
					public stopQueuing(): void;
					public startQueueing(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ThrottlingProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThrottlingProducer<any>>;
					public static PRODUCER_NAME: string;
					public constructor(param0: number, param1: java.util.concurrent.Executor, param2: com.facebook.imagepipeline.producers.Producer<any>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module ThrottlingProducer {
					export class ThrottlerConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<any,any> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThrottlingProducer.ThrottlerConsumer>;
						public onFailureImpl(param0: java.lang.Throwable): void;
						public onCancellationImpl(): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ThumbnailBranchProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailBranchProducer>;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: native.Array<com.facebook.imagepipeline.producers.ThumbnailProducer<com.facebook.imagepipeline.image.EncodedImage>>);
				}
				export module ThumbnailBranchProducer {
					export class ThumbnailConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailBranchProducer.ThumbnailConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailureImpl(param0: java.lang.Throwable): void;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext, param2: number);
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ThumbnailProducer<T>  extends com.facebook.imagepipeline.producers.Producer<any> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailProducer<any>>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.producers.ThumbnailProducer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
						produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					});
					public constructor();
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public canProvideImageForSize(param0: com.facebook.imagepipeline.common.ResizeOptions): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class ThumbnailSizeChecker extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.ThumbnailSizeChecker>;
					public static ACCEPTABLE_REQUESTED_TO_ACTUAL_SIZE_RATIO: number;
					public static isImageBigEnough(param0: com.facebook.imagepipeline.image.EncodedImage, param1: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public constructor();
					public static isImageBigEnough(param0: number, param1: number, param2: com.facebook.imagepipeline.common.ResizeOptions): boolean;
					public static getAcceptableSize(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module producers {
				export class WebpTranscodeProducer extends com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage> {
					public static class: java.lang.Class<com.facebook.imagepipeline.producers.WebpTranscodeProducer>;
					public static PRODUCER_NAME: string;
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<any>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
					public constructor(param0: java.util.concurrent.Executor, param1: com.facebook.common.memory.PooledByteBufferFactory, param2: com.facebook.imagepipeline.producers.Producer<com.facebook.imagepipeline.image.EncodedImage>);
					public produceResults(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext): void;
				}
				export module WebpTranscodeProducer {
					export class WebpTranscodeConsumer extends com.facebook.imagepipeline.producers.DelegatingConsumer<com.facebook.imagepipeline.image.EncodedImage,com.facebook.imagepipeline.image.EncodedImage> {
						public static class: java.lang.Class<com.facebook.imagepipeline.producers.WebpTranscodeProducer.WebpTranscodeConsumer>;
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<any>);
						public constructor();
						public constructor(param0: com.facebook.imagepipeline.producers.Consumer<com.facebook.imagepipeline.image.EncodedImage>, param1: com.facebook.imagepipeline.producers.ProducerContext);
						public onNewResultImpl(param0: com.facebook.imagepipeline.image.EncodedImage, param1: number): void;
						public onFailure(param0: java.lang.Throwable): void;
						public onNewResultImpl(param0: any, param1: number): void;
						public onProgressUpdate(param0: number): void;
						public onCancellation(): void;
						public onNewResult(param0: any, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export abstract class BasePostprocessor extends java.lang.Object implements com.facebook.imagepipeline.request.Postprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.BasePostprocessor>;
					public static FALLBACK_BITMAP_CONFIGURATION: globalAndroid.graphics.Bitmap.Config;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public process(param0: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export abstract class BaseRepeatedPostProcessor extends com.facebook.imagepipeline.request.BasePostprocessor implements com.facebook.imagepipeline.request.RepeatedPostprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.BaseRepeatedPostProcessor>;
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public constructor();
					public getName(): string;
					public update(): void;
					public setCallback(param0: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
					public process(param0: globalAndroid.graphics.Bitmap): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					public process(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class HasImageRequest extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.HasImageRequest>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.HasImageRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
					});
					public constructor();
					public getImageRequest(): com.facebook.imagepipeline.request.ImageRequest;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class ImageRequest extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest>;
					public getPreferredHeight(): number;
					public getSourceUriType(): number;
					public isDiskCacheEnabled(): boolean;
					public getResizeOptions(): com.facebook.imagepipeline.common.ResizeOptions;
					public toString(): string;
					public constructor(param0: com.facebook.imagepipeline.request.ImageRequestBuilder);
					public getRequestListener(): com.facebook.imagepipeline.listener.RequestListener;
					public getCacheChoice(): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
					public getRotationOptions(): com.facebook.imagepipeline.common.RotationOptions;
					public hashCode(): number;
					public getLocalThumbnailPreviewsEnabled(): boolean;
					public getImageDecodeOptions(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public getSourceUri(): globalAndroid.net.Uri;
					public static fromFile(param0: java.io.File): com.facebook.imagepipeline.request.ImageRequest;
					public getAutoRotateEnabled(): boolean;
					public getPriority(): com.facebook.imagepipeline.common.Priority;
					public getProgressiveRenderingEnabled(): boolean;
					public getSourceFile(): java.io.File;
					public getBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public static fromUri(param0: globalAndroid.net.Uri): com.facebook.imagepipeline.request.ImageRequest;
					public equals(param0: any): boolean;
					public getPreferredWidth(): number;
					public getPostprocessor(): com.facebook.imagepipeline.request.Postprocessor;
					public static fromUri(param0: string): com.facebook.imagepipeline.request.ImageRequest;
					public getMediaVariations(): com.facebook.imagepipeline.request.MediaVariations;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
				}
				export module ImageRequest {
					export class CacheChoice {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest.CacheChoice>;
						public static SMALL: com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
						public static DEFAULT: com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
						public static values(): native.Array<com.facebook.imagepipeline.request.ImageRequest.CacheChoice>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
					}
					export class RequestLevel {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
						public static FULL_FETCH: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static DISK_CACHE: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static ENCODED_MEMORY_CACHE: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static BITMAP_MEMORY_CACHE: com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public static values(): native.Array<com.facebook.imagepipeline.request.ImageRequest.RequestLevel>;
						public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
						public static valueOf(param0: string): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
						public getValue(): number;
						public static getMax(param0: com.facebook.imagepipeline.request.ImageRequest.RequestLevel, param1: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class ImageRequestBuilder extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequestBuilder>;
					public setResizeOptions(param0: com.facebook.imagepipeline.common.ResizeOptions): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setSource(param0: globalAndroid.net.Uri): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setRotationOptions(param0: com.facebook.imagepipeline.common.RotationOptions): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setLocalThumbnailPreviewsEnabled(param0: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public isLocalThumbnailPreviewsEnabled(): boolean;
					public setProgressiveRenderingEnabled(param0: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setRequestListener(param0: com.facebook.imagepipeline.listener.RequestListener): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setBytesRange(param0: com.facebook.imagepipeline.common.BytesRange): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public isDiskCacheEnabled(): boolean;
					public static fromRequest(param0: com.facebook.imagepipeline.request.ImageRequest): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public validate(): void;
					public isProgressiveRenderingEnabled(): boolean;
					public getResizeOptions(): com.facebook.imagepipeline.common.ResizeOptions;
					public setMediaVariations(param0: com.facebook.imagepipeline.request.MediaVariations): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setPostprocessor(param0: com.facebook.imagepipeline.request.Postprocessor): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setRequestPriority(param0: com.facebook.imagepipeline.common.Priority): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public static newBuilderWithSource(param0: globalAndroid.net.Uri): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getRequestListener(): com.facebook.imagepipeline.listener.RequestListener;
					public getCacheChoice(): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
					public build(): com.facebook.imagepipeline.request.ImageRequest;
					public getRotationOptions(): com.facebook.imagepipeline.common.RotationOptions;
					public disableDiskCache(): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getImageDecodeOptions(): com.facebook.imagepipeline.common.ImageDecodeOptions;
					public getSourceUri(): globalAndroid.net.Uri;
					public getRequestPriority(): com.facebook.imagepipeline.common.Priority;
					public setCacheChoice(param0: com.facebook.imagepipeline.request.ImageRequest.CacheChoice): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public static newBuilderWithResourceId(param0: number): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getBytesRange(): com.facebook.imagepipeline.common.BytesRange;
					public getPostprocessor(): com.facebook.imagepipeline.request.Postprocessor;
					public setMediaVariationsForMediaId(param0: string): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public getMediaVariations(): com.facebook.imagepipeline.request.MediaVariations;
					public getLowestPermittedRequestLevel(): com.facebook.imagepipeline.request.ImageRequest.RequestLevel;
					public setImageDecodeOptions(param0: com.facebook.imagepipeline.common.ImageDecodeOptions): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setLowestPermittedRequestLevel(param0: com.facebook.imagepipeline.request.ImageRequest.RequestLevel): com.facebook.imagepipeline.request.ImageRequestBuilder;
					public setAutoRotateEnabled(param0: boolean): com.facebook.imagepipeline.request.ImageRequestBuilder;
				}
				export module ImageRequestBuilder {
					export class BuilderException extends java.lang.RuntimeException {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.ImageRequestBuilder.BuilderException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class MediaVariations extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.MediaVariations>;
					public static SOURCE_IMAGE_REQUEST: string;
					public static SOURCE_INDEX_DB: string;
					public static SOURCE_ID_EXTRACTOR: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public getSource(): string;
					public getSortedVariants(param0: java.util.Comparator<com.facebook.imagepipeline.request.MediaVariations.Variant>): java.util.List<com.facebook.imagepipeline.request.MediaVariations.Variant>;
					public static newBuilderForMediaId(param0: string): com.facebook.imagepipeline.request.MediaVariations.Builder;
					public shouldForceRequestForSpecifiedUri(): boolean;
					public static forMediaId(param0: string): com.facebook.imagepipeline.request.MediaVariations;
					public getVariantsCount(): number;
					public hashCode(): number;
					public getVariant(param0: number): com.facebook.imagepipeline.request.MediaVariations.Variant;
					public getMediaId(): string;
				}
				export module MediaVariations {
					export class Builder extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.MediaVariations.Builder>;
						public addVariant(param0: globalAndroid.net.Uri, param1: number, param2: number): com.facebook.imagepipeline.request.MediaVariations.Builder;
						public addVariant(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.facebook.imagepipeline.request.ImageRequest.CacheChoice): com.facebook.imagepipeline.request.MediaVariations.Builder;
						public build(): com.facebook.imagepipeline.request.MediaVariations;
						public setForceRequestForSpecifiedUri(param0: boolean): com.facebook.imagepipeline.request.MediaVariations.Builder;
						public setSource(param0: string): com.facebook.imagepipeline.request.MediaVariations.Builder;
					}
					export class Source extends java.lang.Object implements java.lang.annotation.Annotation {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.MediaVariations.Source>;
						/**
						 * Constructs a new instance of the com.facebook.imagepipeline.request.MediaVariations$Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							annotationType(): java.lang.Class<any>;
							equals(param0: any): boolean;
							hashCode(): number;
							toString(): string;
						});
						public constructor();
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public annotationType(): java.lang.Class<any>;
					}
					export class Variant extends java.lang.Object {
						public static class: java.lang.Class<com.facebook.imagepipeline.request.MediaVariations.Variant>;
						public getWidth(): number;
						public getCacheChoice(): com.facebook.imagepipeline.request.ImageRequest.CacheChoice;
						public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.facebook.imagepipeline.request.ImageRequest.CacheChoice);
						public getHeight(): number;
						public getUri(): globalAndroid.net.Uri;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class Postprocessor extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.Postprocessor>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.Postprocessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						getName(): string;
						getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					});
					public constructor();
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getName(): string;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class RepeatedPostprocessor extends java.lang.Object implements com.facebook.imagepipeline.request.Postprocessor {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.RepeatedPostprocessor>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.RepeatedPostprocessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setCallback(param0: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
						process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
						getName(): string;
						getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
					});
					public constructor();
					public process(param0: globalAndroid.graphics.Bitmap, param1: com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory): com.facebook.common.references.CloseableReference<globalAndroid.graphics.Bitmap>;
					public getName(): string;
					public setCallback(param0: com.facebook.imagepipeline.request.RepeatedPostprocessorRunner): void;
					public getPostprocessorCacheKey(): com.facebook.cache.common.CacheKey;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipeline {
			export module request {
				export class RepeatedPostprocessorRunner extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imagepipeline.request.RepeatedPostprocessorRunner>;
					/**
					 * Constructs a new instance of the com.facebook.imagepipeline.request.RepeatedPostprocessorRunner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						update(): void;
					});
					public constructor();
					public update(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imagepipelinebase {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imagepipelinebase.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageutils {
			export class BitmapUtil extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageutils.BitmapUtil>;
				public static ALPHA_8_BYTES_PER_PIXEL: number;
				public static ARGB_4444_BYTES_PER_PIXEL: number;
				public static ARGB_8888_BYTES_PER_PIXEL: number;
				public static RGB_565_BYTES_PER_PIXEL: number;
				public static MAX_BITMAP_SIZE: number;
				public static decodeDimensions(param0: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public static getPixelSizeForBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): number;
				public static getSizeInBytes(param0: globalAndroid.graphics.Bitmap): number;
				public constructor();
				public static decodeDimensions(param0: native.Array<number>): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public static getSizeInByteForBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageutils {
			export class JfifUtil extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageutils.JfifUtil>;
				public static MARKER_FIRST_BYTE: number;
				public static MARKER_ESCAPE_BYTE: number;
				public static MARKER_SOI: number;
				public static MARKER_TEM: number;
				public static MARKER_EOI: number;
				public static MARKER_SOS: number;
				public static MARKER_APP1: number;
				public static MARKER_SOFn: number;
				public static MARKER_RST0: number;
				public static MARKER_RST7: number;
				public static APP1_EXIF_MAGIC: number;
				public static getAutoRotateAngleFromOrientation(param0: number): number;
				public static getOrientation(param0: java.io.InputStream): number;
				public static getOrientation(param0: native.Array<number>): number;
				public static moveToMarker(param0: java.io.InputStream, param1: number): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageutils {
			export class StreamProcessor extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageutils.StreamProcessor>;
				public static readPackedInt(param0: java.io.InputStream, param1: number, param2: boolean): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageutils {
			export class TiffUtil extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageutils.TiffUtil>;
				public static TIFF_BYTE_ORDER_BIG_END: number;
				public static TIFF_BYTE_ORDER_LITTLE_END: number;
				public static TIFF_TAG_ORIENTATION: number;
				public static TIFF_TYPE_SHORT: number;
				public static getAutoRotateAngleFromOrientation(param0: number): number;
				public static readOrientationFromTIFF(param0: java.io.InputStream, param1: number): number;
			}
			export module TiffUtil {
				export class TiffHeader extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.imageutils.TiffUtil.TiffHeader>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module imageutils {
			export class WebpUtil extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.imageutils.WebpUtil>;
				public static getSize(param0: java.io.InputStream): globalAndroid.util.Pair<java.lang.Integer,java.lang.Integer>;
				public static get2BytesAsInt(param0: java.io.InputStream): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Api18TraceUtils extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Api18TraceUtils>;
				public static beginTraceSection(param0: string): void;
				public static endSection(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class ApkSoSource extends com.facebook.soloader.ExtractFromZipSoSource {
				public static class: java.lang.Class<com.facebook.soloader.ApkSoSource>;
				public static PREFER_ANDROID_LIBS_DIRECTORY: number;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: java.io.File, param3: string);
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
				public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
				public getExtractLogs(param0: string): string;
				public makeUnpacker(): com.facebook.soloader.UnpackingSoSource.Unpacker;
				public getDepsBlock(): native.Array<number>;
				public constructor(param0: java.io.File, param1: number);
				public constructor();
			}
			export module ApkSoSource {
				export class ApkUnpacker extends com.facebook.soloader.ExtractFromZipSoSource.ZipUnpacker {
					public static class: java.lang.Class<com.facebook.soloader.ApkSoSource.ApkUnpacker>;
					public close(): void;
					public shouldExtract(param0: java.util.zip.ZipEntry, param1: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class DirectorySoSource extends com.facebook.soloader.SoSource {
				public static class: java.lang.Class<com.facebook.soloader.DirectorySoSource>;
				public static RESOLVE_DEPENDENCIES: number;
				public static ON_LD_LIBRARY_PATH: number;
				public soDirectory: java.io.File;
				public flags: number;
				public addToLdLibraryPath(param0: java.util.Collection<string>): void;
				public unpackLibrary(param0: string): java.io.File;
				public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
				public loadLibraryFrom(param0: string, param1: number, param2: java.io.File, param3: globalAndroid.os.StrictMode.ThreadPolicy): number;
				public toString(): string;
				public constructor();
				public constructor(param0: java.io.File, param1: number);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class DoNotOptimize extends java.lang.Object implements java.lang.annotation.Annotation {
				public static class: java.lang.Class<com.facebook.soloader.DoNotOptimize>;
				/**
				 * Constructs a new instance of the com.facebook.soloader.DoNotOptimize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					annotationType(): java.lang.Class<any>;
					equals(param0: any): boolean;
					hashCode(): number;
					toString(): string;
				});
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public annotationType(): java.lang.Class<any>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf32_Dyn extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf32_Dyn>;
				public static d_tag: number;
				public static d_un: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf32_Ehdr extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf32_Ehdr>;
				public static e_ident: number;
				public static e_type: number;
				public static e_machine: number;
				public static e_version: number;
				public static e_entry: number;
				public static e_phoff: number;
				public static e_shoff: number;
				public static e_flags: number;
				public static e_ehsize: number;
				public static e_phentsize: number;
				public static e_phnum: number;
				public static e_shentsize: number;
				public static e_shnum: number;
				public static e_shstrndx: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf32_Phdr extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf32_Phdr>;
				public static p_type: number;
				public static p_offset: number;
				public static p_vaddr: number;
				public static p_paddr: number;
				public static p_filesz: number;
				public static p_memsz: number;
				public static p_flags: number;
				public static p_align: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf32_Shdr extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf32_Shdr>;
				public static sh_name: number;
				public static sh_type: number;
				public static sh_flags: number;
				public static sh_addr: number;
				public static sh_offset: number;
				public static sh_size: number;
				public static sh_link: number;
				public static sh_info: number;
				public static sh_addralign: number;
				public static sh_entsize: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf64_Dyn extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf64_Dyn>;
				public static d_tag: number;
				public static d_un: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf64_Ehdr extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf64_Ehdr>;
				public static e_ident: number;
				public static e_type: number;
				public static e_machine: number;
				public static e_version: number;
				public static e_entry: number;
				public static e_phoff: number;
				public static e_shoff: number;
				public static e_flags: number;
				public static e_ehsize: number;
				public static e_phentsize: number;
				public static e_phnum: number;
				public static e_shentsize: number;
				public static e_shnum: number;
				public static e_shstrndx: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf64_Phdr extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf64_Phdr>;
				public static p_type: number;
				public static p_flags: number;
				public static p_offset: number;
				public static p_vaddr: number;
				public static p_paddr: number;
				public static p_filesz: number;
				public static p_memsz: number;
				public static p_align: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class Elf64_Shdr extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.Elf64_Shdr>;
				public static sh_name: number;
				public static sh_type: number;
				public static sh_flags: number;
				public static sh_addr: number;
				public static sh_offset: number;
				public static sh_size: number;
				public static sh_link: number;
				public static sh_info: number;
				public static sh_addralign: number;
				public static sh_entsize: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class ExoSoSource extends com.facebook.soloader.UnpackingSoSource {
				public static class: java.lang.Class<com.facebook.soloader.ExoSoSource>;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
				public makeUnpacker(): com.facebook.soloader.UnpackingSoSource.Unpacker;
				public constructor(param0: java.io.File, param1: number);
				public constructor();
			}
			export module ExoSoSource {
				export class ExoUnpacker extends com.facebook.soloader.UnpackingSoSource.Unpacker {
					public static class: java.lang.Class<com.facebook.soloader.ExoSoSource.ExoUnpacker>;
					public openDsoIterator(): com.facebook.soloader.UnpackingSoSource.InputDsoIterator;
					public close(): void;
					public getDsoManifest(): com.facebook.soloader.UnpackingSoSource.DsoManifest;
				}
				export module ExoUnpacker {
					export class FileBackedInputDsoIterator extends com.facebook.soloader.UnpackingSoSource.InputDsoIterator {
						public static class: java.lang.Class<com.facebook.soloader.ExoSoSource.ExoUnpacker.FileBackedInputDsoIterator>;
						public next(): com.facebook.soloader.UnpackingSoSource.InputDso;
						public close(): void;
						public hasNext(): boolean;
					}
				}
				export class FileDso extends com.facebook.soloader.UnpackingSoSource.Dso {
					public static class: java.lang.Class<com.facebook.soloader.ExoSoSource.FileDso>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class ExtractFromZipSoSource extends com.facebook.soloader.UnpackingSoSource {
				public static class: java.lang.Class<com.facebook.soloader.ExtractFromZipSoSource>;
				public mZipFileName: java.io.File;
				public mZipSearchPattern: string;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: java.io.File, param3: string);
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
				public getExtractLogs(param0: string): string;
				public makeUnpacker(): com.facebook.soloader.UnpackingSoSource.Unpacker;
				public constructor(param0: java.io.File, param1: number);
				public constructor();
			}
			export module ExtractFromZipSoSource {
				export class ZipDso extends com.facebook.soloader.UnpackingSoSource.Dso {
					public static class: java.lang.Class<com.facebook.soloader.ExtractFromZipSoSource.ZipDso>;
					public compareTo(param0: any): number;
				}
				export class ZipUnpacker extends com.facebook.soloader.UnpackingSoSource.Unpacker {
					public static class: java.lang.Class<com.facebook.soloader.ExtractFromZipSoSource.ZipUnpacker>;
					public openDsoIterator(): com.facebook.soloader.UnpackingSoSource.InputDsoIterator;
					public close(): void;
					public getDsoManifest(): com.facebook.soloader.UnpackingSoSource.DsoManifest;
					public shouldExtract(param0: java.util.zip.ZipEntry, param1: string): boolean;
				}
				export module ZipUnpacker {
					export class ZipBackedInputDsoIterator extends com.facebook.soloader.UnpackingSoSource.InputDsoIterator {
						public static class: java.lang.Class<com.facebook.soloader.ExtractFromZipSoSource.ZipUnpacker.ZipBackedInputDsoIterator>;
						public next(): com.facebook.soloader.UnpackingSoSource.InputDso;
						public close(): void;
						public hasNext(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class FileLocker extends java.lang.Object implements java.io.Closeable {
				public static class: java.lang.Class<com.facebook.soloader.FileLocker>;
				public close(): void;
				public static lock(param0: java.io.File): com.facebook.soloader.FileLocker;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class MergedSoMapping extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.MergedSoMapping>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class MinElf extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.MinElf>;
				public static ELF_MAGIC: number;
				public static DT_NULL: number;
				public static DT_NEEDED: number;
				public static DT_STRTAB: number;
				public static PT_LOAD: number;
				public static PT_DYNAMIC: number;
				public static PN_XNUM: number;
				public static extract_DT_NEEDED(param0: java.io.File): native.Array<string>;
				public static extract_DT_NEEDED(param0: java.nio.channels.FileChannel): native.Array<string>;
				public constructor();
			}
			export module MinElf {
				export class ElfError extends java.lang.RuntimeException {
					public static class: java.lang.Class<com.facebook.soloader.MinElf.ElfError>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export abstract class NativeLibrary extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.NativeLibrary>;
				public getError(): java.lang.UnsatisfiedLinkError;
				public ensureLoaded(): void;
				public constructor(param0: java.util.List<string>);
				public initialNativeCheck(): void;
				public loadLibraries(): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class NoopSoSource extends com.facebook.soloader.SoSource {
				public static class: java.lang.Class<com.facebook.soloader.NoopSoSource>;
				public unpackLibrary(param0: string): java.io.File;
				public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class SoFileLoader extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.SoFileLoader>;
				/**
				 * Constructs a new instance of the com.facebook.soloader.SoFileLoader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: string, param1: number): void;
				});
				public constructor();
				public load(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class SoLoader extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.SoLoader>;
				public static SOLOADER_ENABLE_EXOPACKAGE: number;
				public static SOLOADER_ALLOW_ASYNC_INIT: number;
				public static SOLOADER_LOOK_IN_ZIP: number;
				public static setSoFileLoader(param0: com.facebook.soloader.SoFileLoader): void;
				public static resetStatus(): void;
				public constructor();
				public static makeNonZipPath(param0: string): string;
				public static setInTestMode(): void;
				public static loadLibrary(param0: string): void;
				public static setSystemLoadLibraryWrapper(param0: com.facebook.soloader.SystemLoadLibraryWrapper): void;
				public static unpackLibraryAndDependencies(param0: string): java.io.File;
				public static makeLdLibraryPath(): string;
				public static init(param0: globalAndroid.content.Context, param1: boolean): void;
				public static init(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.soloader.SoFileLoader): void;
				public static getLoadedLibrariesNames(): java.util.Set<string>;
				public static setSoSources(param0: native.Array<com.facebook.soloader.SoSource>): void;
				public static init(param0: globalAndroid.content.Context, param1: number): void;
				public static deinitForTest(): void;
				public static areSoSourcesAbisSupported(): boolean;
				public static loadLibrary(param0: string, param1: number): void;
				public static prependSoSource(param0: com.facebook.soloader.SoSource): void;
			}
			export module SoLoader {
				export class Api14Utils extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.soloader.SoLoader.Api14Utils>;
					public static getClassLoaderLdLoadLibrary(): string;
				}
				export class WrongAbiError extends java.lang.UnsatisfiedLinkError {
					public static class: java.lang.Class<com.facebook.soloader.SoLoader.WrongAbiError>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export abstract class SoSource extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.SoSource>;
				public static LOAD_RESULT_NOT_FOUND: number;
				public static LOAD_RESULT_LOADED: number;
				public static LOAD_RESULT_IMPLICITLY_PROVIDED: number;
				public static LOAD_FLAG_ALLOW_IMPLICIT_PROVISION: number;
				public static LOAD_FLAG_MIN_CUSTOM_FLAG: number;
				public static PREPARE_FLAG_ALLOW_ASYNC_INIT: number;
				public addToLdLibraryPath(param0: java.util.Collection<string>): void;
				public unpackLibrary(param0: string): java.io.File;
				public getSoSourceAbis(): native.Array<string>;
				public prepare(param0: number): void;
				public loadLibrary(param0: string, param1: number, param2: globalAndroid.os.StrictMode.ThreadPolicy): number;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class SysUtil extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.SysUtil>;
				public static getSupportedAbis(): native.Array<string>;
				public static deleteOrThrow(param0: java.io.File): void;
				public static makeApkDepBlock(param0: java.io.File, param1: globalAndroid.content.Context): native.Array<number>;
				public static findAbiScore(param0: native.Array<string>, param1: string): number;
				public static dumbDeleteRecursive(param0: java.io.File): void;
				public static getAppVersionCode(param0: globalAndroid.content.Context): number;
				public static fallocateIfSupported(param0: java.io.FileDescriptor, param1: number): void;
				public constructor();
			}
			export module SysUtil {
				export class LollipopSysdeps extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.soloader.SysUtil.LollipopSysdeps>;
					public static fallocateIfSupported(param0: java.io.FileDescriptor, param1: number): void;
					public static getSupportedAbis(): native.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export class SystemLoadLibraryWrapper extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.soloader.SystemLoadLibraryWrapper>;
				/**
				 * Constructs a new instance of the com.facebook.soloader.SystemLoadLibraryWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					loadLibrary(param0: string): void;
				});
				public constructor();
				public loadLibrary(param0: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module soloader {
			export abstract class UnpackingSoSource extends com.facebook.soloader.DirectorySoSource {
				public static class: java.lang.Class<com.facebook.soloader.UnpackingSoSource>;
				public mContext: globalAndroid.content.Context;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
				public getSoSourceAbis(): native.Array<string>;
				public makeUnpacker(): com.facebook.soloader.UnpackingSoSource.Unpacker;
				public prepare(param0: number): void;
				public setSoSourceAbis(param0: native.Array<string>): void;
				public getDepsBlock(): native.Array<number>;
				public static getSoStorePath(param0: globalAndroid.content.Context, param1: string): java.io.File;
				public constructor(param0: java.io.File, param1: number);
				public constructor();
			}
			export module UnpackingSoSource {
				export class Dso extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.soloader.UnpackingSoSource.Dso>;
					public name: string;
					public hash: string;
					public constructor(param0: string, param1: string);
				}
				export class DsoManifest extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.soloader.UnpackingSoSource.DsoManifest>;
					public dsos: native.Array<com.facebook.soloader.UnpackingSoSource.Dso>;
					public write(param0: java.io.DataOutput): void;
					public constructor(param0: native.Array<com.facebook.soloader.UnpackingSoSource.Dso>);
				}
				export class InputDso extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.facebook.soloader.UnpackingSoSource.InputDso>;
					public dso: com.facebook.soloader.UnpackingSoSource.Dso;
					public content: java.io.InputStream;
					public close(): void;
					public constructor(param0: com.facebook.soloader.UnpackingSoSource.Dso, param1: java.io.InputStream);
				}
				export abstract class InputDsoIterator extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.facebook.soloader.UnpackingSoSource.InputDsoIterator>;
					public constructor();
					public close(): void;
					public next(): com.facebook.soloader.UnpackingSoSource.InputDso;
					public hasNext(): boolean;
				}
				export abstract class Unpacker extends java.lang.Object implements java.io.Closeable {
					public static class: java.lang.Class<com.facebook.soloader.UnpackingSoSource.Unpacker>;
					public constructor();
					public openDsoIterator(): com.facebook.soloader.UnpackingSoSource.InputDsoIterator;
					public close(): void;
					public getDsoManifest(): com.facebook.soloader.UnpackingSoSource.DsoManifest;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module widget {
			export module text {
				export module span {
					export class BetterImageSpan extends globalAndroid.text.style.ReplacementSpan {
						public static class: java.lang.Class<com.facebook.widget.text.span.BetterImageSpan>;
						public static ALIGN_BOTTOM: number;
						public static ALIGN_BASELINE: number;
						public static ALIGN_CENTER: number;
						public constructor();
						public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
						public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number);
						public getDrawable(): globalAndroid.graphics.drawable.Drawable;
						public static normalizeAlignment(param0: number): number;
						public constructor(param0: globalAndroid.graphics.drawable.Drawable);
						public updateBounds(): void;
						public getSize(param0: globalAndroid.graphics.Paint, param1: string, param2: number, param3: number, param4: globalAndroid.graphics.Paint.FontMetricsInt): number;
					}
					export module BetterImageSpan {
						export class BetterImageSpanAlignment extends java.lang.Object implements java.lang.annotation.Annotation {
							public static class: java.lang.Class<com.facebook.widget.text.span.BetterImageSpan.BetterImageSpanAlignment>;
							/**
							 * Constructs a new instance of the com.facebook.widget.text.span.BetterImageSpan$BetterImageSpanAlignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								annotationType(): java.lang.Class<any>;
								equals(param0: any): boolean;
								hashCode(): number;
								toString(): string;
							});
							public constructor();
							public hashCode(): number;
							public annotationType(): java.lang.Class<any>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//bolts.Capture:1
//bolts.Continuation:2
//bolts.Task:1
//bolts.TaskCompletionSource:1
//com.facebook.common.executors.ScheduledFutureImpl:1
//com.facebook.common.executors.StatefulRunnable:1
//com.facebook.common.internal.ImmutableList:1
//com.facebook.common.internal.ImmutableMap:2
//com.facebook.common.internal.ImmutableSet:1
//com.facebook.common.internal.Supplier:1
//com.facebook.common.memory.Pool:1
//com.facebook.common.references.CloseableReference:1
//com.facebook.common.references.OOMSoftReference:1
//com.facebook.common.references.ResourceReleaser:1
//com.facebook.common.references.SharedReference:1
//com.facebook.datasource.AbstractDataSource:1
//com.facebook.datasource.BaseDataSubscriber:1
//com.facebook.datasource.DataSource:1
//com.facebook.datasource.DataSources.ValueHolder:1
//com.facebook.datasource.DataSubscriber:1
//com.facebook.datasource.FirstAvailableDataSourceSupplier:1
//com.facebook.datasource.IncreasingQualityDataSourceSupplier:1
//com.facebook.datasource.RetainingDataSourceSupplier:1
//com.facebook.datasource.RetainingDataSourceSupplier.RetainingDataSource:1
//com.facebook.datasource.SimpleDataSource:1
//com.facebook.drawee.controller.AbstractDraweeController:2
//com.facebook.drawee.controller.AbstractDraweeController.InternalForwardingListener:1
//com.facebook.drawee.controller.AbstractDraweeControllerBuilder:4
//com.facebook.drawee.controller.BaseControllerListener:1
//com.facebook.drawee.controller.ControllerListener:1
//com.facebook.drawee.controller.ForwardingControllerListener:1
//com.facebook.drawee.view.DraweeHolder:1
//com.facebook.drawee.view.DraweeView:1
//com.facebook.drawee.view.MultiDraweeHolder:1
//com.facebook.fresco.animation.backend.AnimationBackendDelegate:1
//com.facebook.fresco.animation.backend.AnimationBackendDelegateWithInactivityCheck:1
//com.facebook.imagepipeline.cache.CountingLruMap:2
//com.facebook.imagepipeline.cache.CountingMemoryCache:2
//com.facebook.imagepipeline.cache.CountingMemoryCache.Entry:2
//com.facebook.imagepipeline.cache.CountingMemoryCache.EntryStateObserver:1
//com.facebook.imagepipeline.cache.InstrumentedMemoryCache:2
//com.facebook.imagepipeline.cache.MemoryCache:2
//com.facebook.imagepipeline.cache.MemoryCacheTracker:1
//com.facebook.imagepipeline.cache.ValueDescriptor:1
//com.facebook.imagepipeline.datasource.AbstractProducerToDataSourceAdapter:1
//com.facebook.imagepipeline.datasource.CloseableProducerToDataSourceAdapter:1
//com.facebook.imagepipeline.datasource.ListDataSource:1
//com.facebook.imagepipeline.datasource.ProducerToDataSourceAdapter:1
//com.facebook.imagepipeline.datasource.SettableDataSource:1
//com.facebook.imagepipeline.memory.BasePool:1
//com.facebook.imagepipeline.memory.Bucket:1
//com.facebook.imagepipeline.memory.OOMSoftReferenceBucket:1
//com.facebook.imagepipeline.producers.BaseConsumer:1
//com.facebook.imagepipeline.producers.BaseNetworkFetcher:1
//com.facebook.imagepipeline.producers.Consumer:1
//com.facebook.imagepipeline.producers.DelegatingConsumer:2
//com.facebook.imagepipeline.producers.MultiplexProducer:2
//com.facebook.imagepipeline.producers.NetworkFetcher:1
//com.facebook.imagepipeline.producers.NullProducer:1
//com.facebook.imagepipeline.producers.Producer:1
//com.facebook.imagepipeline.producers.StatefulProducerRunnable:1
//com.facebook.imagepipeline.producers.SwallowResultProducer:1
//com.facebook.imagepipeline.producers.ThreadHandoffProducer:1
//com.facebook.imagepipeline.producers.ThrottlingProducer:1
//com.facebook.imagepipeline.producers.ThumbnailProducer:1

