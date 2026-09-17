# Default :cookie_store encrypts the whole session with AES-256-GCM via the
# openssl gem. On this machine's Ruby (4.0.7), decrypting that cookie back
# raises ArgumentError (wrong number of arguments) and corrupts the process
# for every request after, including Rails' own error page. Storing session
# data server-side (cache_store, backed by solid_cache) avoids that code path
# entirely, since the cookie then just holds a plain random id.
Rails.application.config.session_store :cache_store, key: "_digestly_session"
