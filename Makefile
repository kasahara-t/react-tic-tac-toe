ROOT_DIR := $(shell git rev-parse --show-toplevel)

# デフォルトターゲット
.PHONY: dev
dev: install-dependencies
	bun run dev

.PHONY: install-tools
install-tools:
	@while read line; do \
		lang=$$(echo $$line | cut -d ' ' -f1); \
		version=$$(echo $$line | cut -d ' ' -f2); \
		asdf plugin add $$lang || true; \
		asdf install $$lang $$version; \
		asdf local $$lang $$version; \
	done < .tool-versions
	
.PHONY: install-dependencies
install-dependencies: install-tools
	bun install --frozen-lockfile; \
	lefthook install