/**
 * Copyright (c) Facebook, Inc. and its affiliates. This file is modified by sasigume.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from 'react';
import DocPaginator from '@theme/DocPaginator';
import DocVersionSuggestions from '@theme/DocVersionSuggestions';
import Seo from '@theme/Seo';
import LastUpdated from '@theme/LastUpdated';
import TOC from '@theme/TOC';
import EditThisPage from '@theme/EditThisPage';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useActivePlugin, useVersions, useActiveVersion } from '@theme/hooks/useDocs';

function DocItem(props) {
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  const {
    image,
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
  } = frontMatter;
  const { description, title, editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy } =
    metadata;
  const { pluginId } = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId);
  const version = useActiveVersion(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1; // For meta title, using frontMatter.title in priority over a potential # title found in markdown
  // See https://github.com/facebook/docusaurus/issues/4665#issuecomment-825831367

  const metaTitle = frontMatter.title || title;

  // 2021-6-9 Added utterances
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'sasigume/asobinon');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment');
    script.setAttribute('theme', 'github-light');
    script.crossOrigin = 'anonymous';
    script.async = true;

    document.getElementById('comment-system').appendChild(script);
  }, []);

  return (
    <>
      <Seo
        {...{
          title: metaTitle,
          description,
          keywords,
          image,
        }}
      />

      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}
        >
          <DocVersionSuggestions />
          <div className={styles.docItemContainer}>
            <article>
              {showVersionBadge && (
                <div>
                  <span className="badge badge--secondary">Version: {version.label}</span>
                </div>
              )}
              {!hideTitle && (
                <header>
                  <h1 className={styles.docTitle}>{title}</h1>
                </header>
              )}
              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                <div className="margin-vert--lg">
                  <div className="row">
                    <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <LastUpdated
                        lastUpdatedAt={lastUpdatedAt}
                        formattedLastUpdatedAt={formattedLastUpdatedAt}
                        lastUpdatedBy={lastUpdatedBy}
                      />
                    )}
                  </div>
                </div>
              )}
              <div className="markdown margin-vert--lg">
                <DocContent />
              </div>
            </article>

            <div className="margin-vert--xl">
              <DocPaginator metadata={metadata} />
            </div>

            {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="margin-vert--lg">
                <div className="row">
                  <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>
                  {(lastUpdatedAt || lastUpdatedBy) && (
                    <LastUpdated
                      lastUpdatedAt={lastUpdatedAt}
                      formattedLastUpdatedAt={formattedLastUpdatedAt}
                      lastUpdatedBy={lastUpdatedBy}
                    />
                  )}
                </div>
              </div>
            )}

            <div id="comment-system"></div>
          </div>
        </div>
        {!hideTableOfContents && DocContent.toc && (
          <div className="col col--3">
            <TOC toc={DocContent.toc} />
          </div>
        )}
      </div>
    </>
  );
}

export default DocItem;
